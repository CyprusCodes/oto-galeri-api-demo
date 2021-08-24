const Sequelize = require('sequelize');
const CarModel = require("./Car");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
  });

  const Car = CarModel(connection, Sequelize);

  connection.sync({ alter: true });
  return {
      Car
  };
};

module.exports = setupDatabase();