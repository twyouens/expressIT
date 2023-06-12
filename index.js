const app  = require("express")();
require('dotenv').config()
const port = 8080;
const { default: mongoose } = require("mongoose");
const assets = require('./src/routes/assets')

async function connect() {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected");
    } catch (error) {
        console.error("Error: An error occured when trying to connect to MongoDB database.")
        console.error(error)
    }
}

app.get("/", (req, res) => {
    res.status(404).send("Invalid URL")
});

app.use('/assets',assets)
connect()
app.listen(process.env.APP_PORT, ()=>{console.log(`Server started! vist: http://localhost:${port}`)});