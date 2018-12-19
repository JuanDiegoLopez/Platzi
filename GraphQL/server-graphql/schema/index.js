'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')

const Course = require('./Course')
const Comment = require('./Comment')
const Teacher = require('./Teacher')
const Search = require('./Search')

const rootType = `
  type Query {
    courses: [Course]
    teachers: [Teacher]
    comment(id: Int): Comment
    comments: [Comment]
    course(id: Int): Course
    teacher(id: Int): Teacher
    search(query: String!): [SearchResult]
  }

  type Mutation {
    teacherAdd(teacher: NewTeacher): Teacher
    teacherUpdate(id: Int!, teacher: UpdatedTeacher): Teacher
    teacherDelete(id: Int!): Teacher
    courseAdd(course: NewCourse!): Course
    courseUpdate(id:Int!, course: UpdatedCourse): Course
    courseDelete(id: Int!): Course
    commentAdd(comment: NewComment!): Comment
    commentUpdate(id: Int!, text: String!): Comment
    commentDelete(id: Int!): Comment
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootType, Course.typeDef, Teacher.typeDef, Comment.typeDef, Search.typeDef],
  resolvers: merge(Course.resolvers, Teacher.resolvers, Comment.resolvers, Search.resolvers)
})

module.exports = schema
