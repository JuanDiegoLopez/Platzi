'use strict'

const chalk = require('chalk')

const server = require('./app')
const { sequelize } = require('./db/models')

const PORT = process.env.PORT || 5678

server.listen(PORT, () => {
  sequelize.sync().then(() => {
    console.log(chalk.green('Connection with database successfull'))
    console.log(chalk.green(`Server running at http://localhost:${5678}`))
  })
})
