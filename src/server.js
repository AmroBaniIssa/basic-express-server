'use strict'
const express = require("express");
const app=express();
const stamper=require('./middlewares/stamper');
const notFoundHandler=require('./handlers/404');
const errorHandler=require('./handlers/500');
const logger = require("./middlewares/logger");
const Person = require('./middlewares/Person');
const Validator = require('./middlewares/Validator');

// app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/',(req,res)=>{
 res.send("hello world");

})

app.get('/data',stamper,sendRes)




function sendRes(req,res){
    res.send({
        id:1,
        name:"amro",
        email:"aaaaaaaaaaa",
        time: req.timestamp,
    });
}

app.get('/test', (req, res) => {
    res.send('hello----');
});
//if you sent Person() without any thing inside it will treger the error
app.get('/person', Person("amro"), (req, res) => {
    res.send({
        message: "Person route",
        name: req.myName,
    });
});

app.get('/Validator', Validator("amro"), (req, res) => {
    res.send({
        message: "Person route",
        code:"200",
        name: req.string,
    });
});

app.use('*',notFoundHandler);
app.use(errorHandler);

function start(port){

    app.listen(port,()=>{
        console.log(`server is listen on ${port}`)
    })

}

module.exports={
    start:start,
    app:app,
}