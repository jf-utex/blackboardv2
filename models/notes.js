module.exports = function(sequelize, Sequelize) {
  return sequelize.define('student', {
    email: Sequelize.VARCHAR(255),
    author: Sequelize.VARCHAR(255),
    note: Sequelize.TEXT,
    created_at: Sequelize.DATE,
  });

}



// Syncs with DB
// Chirp.sync();
