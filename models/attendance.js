module.exports = function(sequelize, Sequelize) {
  return sequelize.define('student', {
    email: Sequelize.VARCHAR(255),
    timestamps: false
    present: Sequelize.BOOLEAN,

  });
}
