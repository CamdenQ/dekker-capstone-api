const express = require('express'),
  path = require('path');

const UserService = require('./user-service');

const userRouter = express.Router();
const jsonBodyParser = express.json();

userRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { password, username, nickname } = req.body;
  for (const field of ['username', 'password', 'nickname'])
    if (!req.body[field])
      return res.status(400).json({
        error: `Missing '${field}' in request body`,
      });

  const passwordError = UserService.validatePassword(password);
  if (passwordError) return res.status(400).json({ error: passwordError });
  UserService.hasUserWithUsername(req.app.get('db'), username)
    .then((hasUserWithUsername) => {
      if (hasUserWithUsername)
        return res.status(400).json({ error: 'Username taken' });

      return UserService.hashPassword(password).then((hashedPassword) => {
        const newUser = {
          username,
          password: hashedPassword,
          nickname,
        };

        return UserService.insertUser(req.app.get('db'), newUser).then(
          (user) => {
            res
              .status(201)
              .location(
                path.posix.join(
                  `https://blooming-reef-26525.herokuapp.com`,
                  `/cabinet/${user.id}`
                )
              )
              .json(UserService.serializeUser(user));
          }
        );
      });
    })
    .catch(next);
});

module.exports = userRouter;
