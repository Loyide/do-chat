require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const database = require('database');
const { associate, sync } = require('./database/sync');

const { PORT } = process.env;

const app = new Koa();
const router = new Router();

const Server = {
  initializeDB: () => {
    database.authenticate()
      .then(
        () => {
          associate();
          sync();
          console.log('DB connection has been established');
        }
      )
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  },

  middleware: () => {
    app.use(koaBody({ jsonLimit: '20mb', multipart: true }));
    app.use(router.routes()).use(router.allowedMethods());
  },

  listen: () => {
    app.listen(PORT, () => {
      console.log(`Server is running, listen port number is ${PORT}`);
    });
  }
};

Server.initializeDB();
Server.middleware();
Server.listen();