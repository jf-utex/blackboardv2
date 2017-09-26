module.exports = function(sequelize, Sequelize) {
  return sequelize.define('Class', {

    email: Sequelize.STRING,
    // className: Sequelize.STRING,
    assignments: Sequelize.STRING,
    syllabus: Sequelize.STRING
    // files: Sequelize.VARCHAR(255)
  })

}
