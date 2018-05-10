require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const db = require('database');

const { PORT } = process.env;
export default class Server {
  constructor() {
    this.app = new Koa();
    this.router = new Router();
    this.middleware();
    this.initializeDB();
  }

  initializeDB() {
    db.authenticate().then(
      () => {
        associate();
        console.log('DB Connection has been established');
      },
      (err) => {
        console.log('Unable to connect to the DB:', err);
      }
    );
  }

  middleware() {
    const { app, router } = this;
    app.use(router.routes()).use(router.allowedMethods());
  }

  listen() {
    const { app } = this;
    app.listen(PORT, () => {
      console.log(`Server is running, port number is ${PORT}`);
    });
  }
}