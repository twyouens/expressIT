const express = require("express");
const app = express();
require('dotenv').config()
const { default: mongoose } = require("mongoose");
const assets = require('./src/routes/assets')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function connect() {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected");
    } catch (error) {
        console.error("Error: An error occured when trying to connect to MongoDB database.")
        console.error(error)
    }
}

app.use('/assets', assets)
connect()
app.listen(process.env.APP_PORT, ()=>{console.log(`Server started! vist: http://localhost:${process.env.APP_PORT}`)});