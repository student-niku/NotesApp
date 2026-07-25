const express = require("express")
const trashCountController = require("../controller/trashCountController")

const router = express.Router()

router.get("/trashcount",trashCountController.trashCount)

module.exports = router