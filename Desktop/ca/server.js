const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();

const { Course, eNROLLMENT} = REQUIRE(./SCHEMA);
const { course , enr} = require(./SCHEMA)
app.use(express.json());

mongoose.connect('mongodb+srv://yashuwantjohns69:<db_data>@cluster0.ysx0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send("welcome to the platform");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})