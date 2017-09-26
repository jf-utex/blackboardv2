module.exports = function(sequelize, Sequelize) {
  return sequelize.define('Note', {
    email: Sequelize.STRING,
    author: Sequelize.STRING,
    note: Sequelize.TEXT,
    created_at: Sequelize.DATE,
  });

}
