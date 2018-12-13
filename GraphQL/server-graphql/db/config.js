module.exports = {
  development: {
    database: 'graphql',
    username: 'root',
    password: null,
    dialect: 'sqlite',
    storage: './db/db.sqlite',
    operatorsAliases: false
  },
  test: {
    database: 'test',
    username: 'root',
    password: null,
    dialect: 'sqlite',
    storage: './db/db.sqlite',
    operatorsAliases: false
  },
  production: {
    database: 'production',
    username: 'root',
    password: null,
    dialect: 'sqlite',
    storage: './db/db.sqlite',
    operatorsAliases: false
  }
}
