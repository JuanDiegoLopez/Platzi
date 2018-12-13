'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')

const Course = require('./Course')
const Teacher = require('./Teacher')

const rootType = `
  type Query {
    courses: [Course]
    teachers: [Teacher]
    course(id: Int): Course
    teacher(id: Int): Teacher
  }

  type Mutation {
    teacherAdd(teacher: NewTeacher): Teacher
    teacherUpdate(id: Int!, teacher: UpdatedTeacher): Teacher
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootType, Course.typeDef, Teacher.typeDef],
  resolvers: merge(Course.resolvers, Teacher.resolvers)
})

module.exports = schema
