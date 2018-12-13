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
    text: dataTypes.STRING
  }

  return sequelize.define('comments', model)
}
