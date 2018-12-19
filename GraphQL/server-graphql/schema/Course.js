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

  input NewCourse {
    title: String!
    description: String!
  }

  input UpdatedCourse {
    title: String
    description: String
  }
`

const resolvers = {
  Query: {
    courses: () => Course.findAll({ include: ['teacher', 'comments'] }),
    course: (_, args) => Course.findByPk(args.id, { include: ['teacher', 'comments'] })
  },
  Mutation: {
    courseAdd: (_, args) => Course.create(args.course),
    courseUpdate: async (_, args) => {
      await Course.update(args.course, { where: { id: args.id } }).catch(error => console.error(error))
      return Course.findByPk(args.id, { include: ['teacher', 'comments'] })
    },
    courseDelete: async (_, args) => {
      try {
        const courseDeleted = await Course.findByPk(args.id, { include: ['teacher', 'comments'] })
        await Course.destroy({ where: { id: args.id } })
        return courseDeleted
      } catch (error) {
        console.error(error)
      }
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}
