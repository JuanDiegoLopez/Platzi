'use strict'

const { Course } = require('../db/models')

const typeDef = `
  """ Esto es un curso en el sistema """
  type Course {
    id: ID!
    title: String!
    """ Esta es la descripción del curso """
    description: String!
    teacher: Teacher
    rating: Float
    comments: [Comment]
  }

  type Comment {
    id: ID!
    name: String!
    text: String!
  }
`

const resolvers = {
  Query: {
    courses: () => Course.findAll({ include: ['teacher', 'comments'] }),
    course: (_, args) => Course.findByPk(args.id, { include: ['teacher', 'comments'] })
  }
}

module.exports = {
  typeDef,
  resolvers
}
