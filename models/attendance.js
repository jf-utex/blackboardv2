module.exports = function(sequelize, Sequelize) {
  return sequelize.define('student', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  })
}
