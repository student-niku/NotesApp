const express = require('express')
const noteController = require("../controller/noteController")
const router = express.Router()

router.post("/note", noteController.noteCreat)
router.get("/note", noteController.getNote)
router.get("/trash", noteController.getTrashNote);
router.put("/note/:id", noteController.deleteNote);
router.put("/noteupdate/:id", noteController.UdateNote);
router.delete("/notedelete/:id" , noteController.noteDelete)
router.get("/search" , noteController.searchNote)



module.exports = router;