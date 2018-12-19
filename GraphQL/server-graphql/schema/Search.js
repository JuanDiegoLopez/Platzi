'use strict'
const Sequelize = require('sequelize')
const { Course, Teacher} = require('../db/models')

const Op = Sequelize.Op

const typeDef = `union SearchResult = Teacher | Course`

const resolvers = {
  Query: {
    search: async (_, args) => {
      const courses = await Course.findAll({
        where: {
          title: {
            [Op.like]: `%${args.query}%`
          }
        },
        include: ['teacher', 'comments']
      })

      const teachers = await Teacher.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like] : `%${args.query}%`
              }
            },
            {
              nacionality: {
                [Op.like]: `%${args.query}%`
              }
            }
          ]  
        }
      })

      return courses.concat(teachers)
    }
  },
  SearchResult: {
    __resolveType: (obj) => {
      if (obj.name) return 'Teacher'
      return 'Course'
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}