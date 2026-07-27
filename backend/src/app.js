const express = require('express')
require('dotenv').config();
const noteRoute = require("../src/routes/noteRoute")
const noteCountRoute = require('../src/routes/noteCountRoute')
const trashCountRoute = require('../src/routes/trashCountRoute')
const authRoute = require('../src/routes/authRoute')
const cors = require("cors");


const app = express();
app.use(express.json())
app.use(cors())


app.use("/api",noteRoute)
app.use("/api" , noteCountRoute)
app.use("/api",trashCountRoute)
app.use("/api/auth" , authRoute )


module.exports = app;
