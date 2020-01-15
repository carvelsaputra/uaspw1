const express = require('express');
const bodyParser = require('body-parser');
const router = require('./route/route');
const cors = require('cors');
const app = express();


// app.get('/profile/bagas.jpeg',(req,res)=>{
//
//
//
//     res.send({
//         test:'oke'
//     })
// })
//
// // Ini Middleware
// app.use((req,res,next)=>{
//
//
//     console.log(req.url)
//     next() // ini buat trigger block ny
// })

app.use(express.static('data'));
app.use(cors());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(8081);
