const app  = require("express")();
const port = 8080;
const assets = require('./src/routes/assets')

app.get("/", (req, res) => {
    res.status(200).send(
        {
            key: "Hello"
        }
    )
});

app.use('/assets',assets)                                                                                                                               

app.listen(port, ()=>{console.log(`Server started! vist: http://localhost:${port}`)});