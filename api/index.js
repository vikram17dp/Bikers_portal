import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
const app = express()
app.use(express.json())
dotenv.config()
connectDB()
const port = process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.send('API IS WORKING')
})
app.listen(port,()=>{
    console.log("server is listing on",port);
    
})
