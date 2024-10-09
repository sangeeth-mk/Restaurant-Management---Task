import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import MONGO_URL from './config/Database.js';
import orderRoutes from './routes/routes.js';
// import 'dotenv/config.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',orderRoutes)


const PORT = process.env.PORT || 3001 ;
app.listen(PORT,()=>{
    console.log(`app is running at http://localhost:${PORT}`)
})

mongoose.connect(MONGO_URL)
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log("couldnt connect to database",err))
