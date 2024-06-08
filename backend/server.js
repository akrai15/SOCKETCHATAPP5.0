import express, { application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connecttodb from './db/connecttodb.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import {app,server} from './socket/socket.js';
import path from 'path';






dotenv.config();
app.use(cookieParser());
const PORT=process.env.PORT || 5000;

const __dirname = path.resolve();


app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
}
)





server.listen(PORT,()=>{
    connecttodb();
    console.log(`Server is running on port ${PORT}`);
})