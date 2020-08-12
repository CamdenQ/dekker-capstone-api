// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://postgres@localhost/dekker',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: 'postgresql://postgres@localhost/dekker-test',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/test/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};
