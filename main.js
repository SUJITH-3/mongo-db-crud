const express = require('express')
const app = express()
const dotenv = require('dotenv')
const routers = require('./router/route')
const { connectDatabase } = require('./controllers/lib/db')
dotenv.config()
connectDatabase();
app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        value: "true"
    })
})
app.use("/movies", routers)
app.listen(process.env.port, () => {
    console.log(`The server is running at port ${process.env.port}`)
})