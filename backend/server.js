import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import {app,server} from './socket/socket.js';



const PORT  = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  // to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser()); // to parse the incoming cookies from req.bodies



app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



// app.get("/" , (req,res)=>{
//     res.send("Hello World!");
// });


server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server is running on port : ${PORT}`);
})