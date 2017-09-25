module.exports = function(sequelize, Sequelize) {
  return sequelize.define('classes', {
    className: Sequelize.STRING,
      })
}
