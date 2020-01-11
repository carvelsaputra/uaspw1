const express = require('express');
const bodyParser = require('body-parser');
const router = require('./route/route');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(8081);
