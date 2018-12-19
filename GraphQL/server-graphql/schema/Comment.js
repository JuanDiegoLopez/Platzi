'use strict'

const { Comment } = require('../db/models')

const typeDef = `
  type Comment {
    id: ID!
    name: String!
    text: String!
  }

  input NewComment {
    name: String!
    text: String!
  }
`

const resolvers = {
  Query: {
    comments: () => Comment.findAll({ include: ['course'] }),
    comment: (_, args) => Comment.findByPk(args.id, { include: ['course'] })
  },
  Mutation: {
    commentAdd: (_, args) => Comment.create(args.comment),
    commentUpdate: async (_, args) => {
      await Comment.update(args.text, { where: { id: args.id } }).catch(error => console.error(error))
      return Comment.findByPk(args.id, { include: ['course'] })
    },
    commentDelete: async (_, args) => {
      try {
        const commentDeleted = await Comment.findByPk(args.id, { include: ['course'] })
        await Comment.destroy({ where: { id: args.id } })
        return commentDeleted
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
