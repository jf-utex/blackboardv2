module.exports = function(sequelize, Sequelize) {
  return sequelize.define('classes', {
    
    email: Sequelize.VARCHAR(255),
    // className: Sequelize.STRING,
    assignments: Sequelize.VARCHAR(255),
    syllabus: Sequelize.VARCHAR(255)
    // files: Sequelize.VARCHAR(255)
  })

}
