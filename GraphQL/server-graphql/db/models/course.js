'use strict'

module.exports = function (sequelize, dataTypes) {
  const model = {
    id: {
      primaryKey: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    title: dataTypes.STRING,
    description: dataTypes.STRING
  }

  return sequelize.define('courses', model)
}
