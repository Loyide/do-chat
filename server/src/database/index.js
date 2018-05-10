import sequelize from 'sequelize';

const {
  MYSQL_PW
} = process.env;

const db = new sequelize('reactChat', 'root', MYSQL_PW, {
  host: 'localhost',
  dialect: 'mysql',
  ssl: true,
  dialectOptions: {
    ssl: true
  },
  define: {
    underscored: true
  }
});

export default db;