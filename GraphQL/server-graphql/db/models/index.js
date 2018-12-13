'use strict'

const Sequelize = require('sequelize')

const setupCourseModel = require('./course')
const setupTeacherModel = require('./teacher')
const setupCommentModel = require('./comment')

let config = require('../config')
config = config[process.env.NODE_ENV]

const sequelize = new Sequelize(config)

const Course = setupCourseModel(sequelize, Sequelize)
const Teacher = setupTeacherModel(sequelize, Sequelize)
const Comment = setupCommentModel(sequelize, Sequelize)

Course.belongsTo(Teacher, { as: 'teacher' })
Course.hasMany(Comment, { as: 'comments' })
Comment.belongsTo(Course, { as: 'course' })
Teacher.hasMany(Course, { as: 'courses' })

module.exports = {
  sequelize,
  Course,
  Teacher,
  Comment
}
