const express = require('express');
const bodyParser = require('body-parser');
const router = require('./route/route');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.listen(8081);
