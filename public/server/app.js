const mongoose= require("mongoose");
const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');

// //Middleware
// const middleware = (req,res,next) =>{
//     console.log(`Hello middleware`);
//     next();
// }

const db= 'mongodb+srv://Abrarsh2209:yfh5JEt7lTb53ZxM@cluster0.2kgbnxq.mongodb.net/AbrarAPI?retryWrites=true&w=majority';
mongoose.connect(db).then(()=>{
    console.log("Success");
}).catch((err)=>console.log("none connection"));

app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));

app.listen(5000,()=>{
    console.log("Server is running");
})