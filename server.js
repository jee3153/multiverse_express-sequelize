const app = require("./index");
const setupDb = require('./setupDb');
const port = 3000;

setupDb(app, port);