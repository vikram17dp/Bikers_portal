import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import userRouter from './routes/user.routes.js'
import cors from 'cors'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/admin.route.js'
const app = express()
app.use(express.json())
dotenv.config()
connectDB();
connectCloudinary();

const port = process.env.PORT || 4000;

app.use(cors({
    origin: '*',
  }));
  
app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{
    res.send('API IS WORKING')
})
app.listen(port,()=>{
    console.log("server is listing on",port);
    
})
