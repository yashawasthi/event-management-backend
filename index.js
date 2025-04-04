import express from "express";
import dotenv from "dotenv"

dotenv.config();
let PORT=process.env.PORT;
const app=express();


app.get("/",(req,res)=>{
    res.json("APP RUNNING")
})


app.listen(PORT,(req,res)=>{
    console.log(`App is running on port ${PORT}`)
})