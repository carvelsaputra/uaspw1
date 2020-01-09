const express = require('express');
const bodyParser = require('body-parser');
const router = require('./route/route');
const app = express();
app.use(router);
app.use(bodyParser.urlencoded({extended: false}));
app.listen(8081);
