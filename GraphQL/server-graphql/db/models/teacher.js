'use strict'

module.exports = function (sequelize, dataTypes) {
  const model = {
    id: {
      primaryKey: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    name: dataTypes.STRING,
    nacionality: dataTypes.STRING,
    gender: dataTypes.STRING
  }

  return sequelize.define('teachers', model)
}
