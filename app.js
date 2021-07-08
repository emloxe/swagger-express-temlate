const express = require('express');

const swaggerInstall = require('./utils/swagger');


const app = express();
swaggerInstall(app)

app.listen(3001);
console.log("connect to http://127.0.0.1", 3001);