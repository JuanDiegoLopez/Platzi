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
      await Teacher.update(args.teacher, { where: { id: args.id } }).catch(error => console.log(error))
      return Teacher.findByPk(args.id, { include: ['courses'] })
    },
    teacherDelete: async (_, args) => {
      try {
        const teacherDeleted = await Teacher.findByPk(args.id, { include: ['courses'] })
        const rowDeleted = await Teacher.destroy({ where: { id: args.id } })
        
        if (rowDeleted > 0) return teacherDeleted
        return new Error(`El profesor con id ${args.id} no existe`)
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
