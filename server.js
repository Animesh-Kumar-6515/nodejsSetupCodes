
// import { createApp } from 'h3'
const { response } = require("express");
const express=require("express");

const app=express();

app.get("/",function(request,response){
    response.send("<h1>Hello world!</h1>")
})

app.get("/contact",function(request,response){
    response.send("Contact Animesh Kumar at:animeshkumar6515@gmail.com");
})

app.get("/about",function(request,response){
    response.send("Hi, I am Animesh Kumar a computer Science undergrad @RCCIIT");
})

app.listen(3000,function(){
    console.log("Server 300 has started");
}) 