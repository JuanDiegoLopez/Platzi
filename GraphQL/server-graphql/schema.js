const { gql } = require('apollo-server-express') 

const typeDefs = gql`
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

  type Teacher {
    id: ID!
    name: String!
    nacionality: String!
    gender: Gender
    courses: [Course]
  }

  type Comment {
    id: ID!
    name: String!
    text: String!
  }

  enum Gender {
    MALE
    FEMALE
  }

  type Query {
    courses: [Course]
    teachers: [Teacher]
    course(id: Int): Course
    teacher(id: Int): Teacher
  }
`

module.exports = typeDefs
