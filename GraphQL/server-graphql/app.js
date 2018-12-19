'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')

const schema = require('./schema')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = new ApolloServer({
  schema,
  formatError: (error) => {
    return {
      message: error.message
    }
  }
})

server.applyMiddleware({ app })

module.exports = app
