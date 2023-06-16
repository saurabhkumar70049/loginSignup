import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;
import "./models/user.js"; //it is called load

import authRouter from "./routes/auth.js";"./routes/auth.js";

//DataBase connection : there three way to use mongodb 
//1. Online Mongodb Atlas
//2. local computer Mongodb Compass


mongoose.connect("mongodb://localhost:27017");
// mongoose.connect("mongodb+srv://saurabhbarej:Password07@cluster0.ncpdb62.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.on("connected",()=> {
    console.log('connected to database')
});
mongoose.connection.on("error", ()=> {
    console.log('There is some error');
});

app.use(express.json());
app.use("/api/auth", authRouter); // first argument is for defining path and it not mendatory 

// app.get('/', (req, res)=> {
//     res.send('hello world');
// })

app.listen(PORT, ()=> {
    console.log(`Port is runninng on ${PORT}`)
})