const express = require("express")
const cors = require("cors")

const app = express();
const issueRoutes = require("./routes/issues.routes")
const releaseRoutes = require ("./routes/releases.routes")
const logger = require("./middleware/logger.middleware")
const errorHandler = require("./middleware/error.middleware")

app.use(
    cors({
        origin:"*",
    }))
app.use(express.json())
app.use("/api/issues", issueRoutes)
app.use("/api/releases", releaseRoutes)
app.use(logger)
app.use(errorHandler)

app.get("/health", (req,res)=>{
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
    })


})

module.exports = app;