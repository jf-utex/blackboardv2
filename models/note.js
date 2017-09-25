module.exports = function(sequelize, Sequelize) {
  return sequelize.define('Note', {
    email: Sequelize.VARCHAR(255),
    author: Sequelize.VARCHAR(255),
    note: Sequelize.TEXT,
    created_at: Sequelize.DATE,
  });

}
