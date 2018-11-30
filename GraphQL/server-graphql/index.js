const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express') 

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

const PORT = 5678
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${5678}${server.graphqlPath}`)
})