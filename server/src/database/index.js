const Sequelize = require('sequelize');

const {
  MYSQL_PW
} = process.env;

const Ca = Sequelize.Op; // Cover alias

const operatorsAliases = {
  $eq: Ca.eq,
  $ne: Ca.ne,
  $gte: Ca.gte,
  $gt: Ca.gt,
  $lte: Ca.lte,
  $lt: Ca.lt,
  $not: Ca.not,
  $in: Ca.in,
  $notIn: Ca.notIn,
  $is: Ca.is,
  $like: Ca.like,
  $notLike: Ca.notLike,
  $iLike: Ca.iLike,
  $notILike: Ca.notILike,
  $regexp: Ca.regexp,
  $notRegexp: Ca.notRegexp,
  $iRegexp: Ca.iRegexp,
  $notIRegexp: Ca.notIRegexp,
  $between: Ca.between,
  $notBetween: Ca.notBetween,
  $overlap: Ca.overlap,
  $contains: Ca.contains,
  $contained: Ca.contained,
  $adjacent: Ca.adjacent,
  $strictLeft: Ca.strictLeft,
  $strictRight: Ca.strictRight,
  $noExtendRight: Ca.noExtendRight,
  $noExtendLeft: Ca.noExtendLeft,
  $and: Ca.and,
  $or: Ca.or,
  $any: Ca.any,
  $all: Ca.all,
  $values: Ca.values,
  $col: Ca.col
};

const db = new Sequelize('reactChat', 'root', MYSQL_PW, {
  host: 'localhost',
  dialect: 'mysql',
  ssl: true,
  logging: false,
  dialectOptions: {
    ssl: true
  },
  define: {
    underscored: true
  },
  operatorsAliases: operatorsAliases
});

module.exports = db;