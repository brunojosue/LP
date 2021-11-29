const { Sequelize } = require('sequelize');

exports.connect = () => {

    const sequelize = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

/*
connection.prepare('select ? + ? as tests', (err, statement) => {
  // statement.parameters - array of column definitions, length === number of params, here 2
  // statement.columns - array of result column definitions. Can be empty if result schema is dynamic / not known
  // statement.id
  // statement.query

  statement.execute([1, 2], (err, rows, columns) => {
    // -> [ { tests: 3 } ]
  });

  // note that there is no callback here. There is no statement close ack at protocol level.
  statement.close();
});
*/


