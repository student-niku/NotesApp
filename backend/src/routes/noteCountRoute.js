const express = require("express")
const noteCountController = require("../controller/noteCountController")

const router = express.Router()

router.get("/notecount", noteCountController.countControll)

module.exports = router