import express, { application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connecttodb from './db/connecttodb.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import {app,server} from './socket/socket.js';




dotenv.config();
app.use(cookieParser());
const PORT=process.env.PORT || 5000;
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(PORT,()=>{
    connecttodb();
    console.log(`Server is running on port ${PORT}`);
})