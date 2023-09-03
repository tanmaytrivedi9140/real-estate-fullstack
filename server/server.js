import express from 'express';
import cookieParser from 'cookie-parser';
import { userRoute } from './routes/userRoutes.js';
import cors from 'cors'
const app = express();
import dotenv from 'dotenv';
dotenv.config()
const PORT = process.env.PORT || 3000;
app.use(cookieParser())
app.use(express.json())








app.listen(PORT , (req,res)=>{
    console.log(`server started at ${PORT}`);
})
app.use("/api/user", userRoute);