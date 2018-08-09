const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabae (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
