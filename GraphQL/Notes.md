# Notes GraphQL
Is an alternative to REST with optimization advantages.

## Types

### Scarlar
  * Int
  * Float
  * Sring
  * Boolean
  * ID

### Object
  Example: 
  ```
    type Class {
        id: ID!
        description: String
        teachers: [Teacher]
        rating: Int
    }
  ```
### Enum
  Example:
  ```
    enum Gender {
      Male
      Female
    }
  ```
### Interface

  Example: 
  ```
    interface Profile {
      name: String!
      email: String!
    }

    type ProfileFB implements Profile {
      name: String!
      email: String!
      Friends: [User]
    }

    type ProfileTW implements Profile {
      name: String!
      email: String!
      handle: String
      Followers: [User]
    }
  ```

### Unions

  This type serve to return a response formed with various types.

  Example: 
  ```
    union Search = Friend | Event | Page | Place
  ```

## Types modifiers
  
  * ! - No null
  * [String] - Is a list of strings
  * [String]! - List of strings cant be null
  * [Strings!]! - List of strings cant be null and all of this elements can be null

## Root types

### Query
  Is similiar to endpoints in REST
  
  Example: 
  ```
    type Query {
      courses: [Course]
      teachers: [Teacher]
      course(id: String!): Course
      teacher(id: String!): Teacher
    }
  ```

### Mutation
  It serve to create or update types in our server.

  Example:
  ```
    type Mutation {
      addCourse(description: String, teacherId: String): Course
    }
  ```

### Input
  It serve to group various parameters of a mutation.

  Example:
  ```
    input newTeacher {
      name: String!
      gender: Gender
    }

    type Mutation {
      addTeacher(newTeacher!): Teacher
    }
  ```



