const express=require('express');
const connectMongo=require('./db.js');
const router = require('./route/pRoute');

connectMongo();
const app=express();
app.use(express.json());

app.get("/test",(req,resp)=>{
    resp.end("hi");
})
app.use("/pro",router);

app.listen(3901,()=>{
    console.log("running");
})