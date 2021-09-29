require('dotenv').config()

module.exports = {
    development: {
      username: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASSWORD,
      database: process.env.DEV_DB_NAME,
      host: process.env.DEV_HOST,
      dialect: 'mysql',
    },
    test: {
      username: process.env.TEST_USER,
      password: process.env.TEST_PASSWORD,
      database: process.env.TEST_DB_NAME,
      host: process.env.TEST_HOST,
      port: process.env.TEST_PORT,
      dialect: 'mysql',
    },
    production: {
      username: process.env.PROD_USER,
      password: process.env.PROD_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_HOST,
      dialect: 'mysql',
    },
  };
  