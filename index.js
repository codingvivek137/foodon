const express = require('express');
const app=express();
const port=5000;
const mongodb=require('./db')
mongodb();
app.use((req,res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header( 
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept" ); 
    next();
})

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use(express.json());
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.listen(port,()=>{
    console.log(`example port listening on ${port}`)
})