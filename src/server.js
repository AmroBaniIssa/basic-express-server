'use strict'
const express = require("express");
const app=express();
const notFoundHandler=require('./handlers/404');
const errorHandler=require('./handlers/500');
const Person = require('./middlewares/Person');
// app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
 res.send("hello world");

})

app.get('/data',sendRes)




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
// app.get('/person', Person("amro"), (req, res) => {
//     res.send({
//         message: "Person route",
//         name: req.myName,
//     });
// });

app.get('/person/:name', Person ,(req, res) => {
    res.send({
        message: "Person route",
        name: req.myName,
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