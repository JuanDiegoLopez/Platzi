'use strict'

const { Teacher } = require('../db/models')

const typeDef = `
  type Teacher {
    id: ID!
    name: String!
    nacionality: String!
    gender: Gender
    courses: [Course]
  }

  enum Gender {
    Male
    Female
  }

  input NewTeacher {
    name: String!
    nacionality: String!
    gender: Gender
  }

  input UpdatedTeacher {
    name: String
    gender: Gender
    nacionality: String
  }
`

const resolvers = {
  Query: {
    teachers: () => Teacher.findAll({ include: ['courses'] }),
    teacher: (_, args) => Teacher.findByPk(args.id, { include: ['courses'] })
  },
  Mutation: {
    teacherAdd: (_, args) => Teacher.create(args.teacher),
    teacherUpdate: async (_, args) => {
      try {
        await Teacher.update(args.teacher, { where: { id: args.id } })
        return Teacher.findByPk(args.id, { include: ['courses'] }) 
      } catch (error) {
        console.log(error)
      }
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}
