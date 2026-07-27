const express = require('express')
const noteController = require("../controller/noteController")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/note", authMiddleware, noteController.noteCreat)
router.get("/note",authMiddleware, noteController.getNote)
router.get("/trash",authMiddleware, noteController.getTrashNote);
router.put("/note/:id",authMiddleware, noteController.deleteNote);
router.put("/noteupdate/:id",authMiddleware, noteController.UdateNote);
router.delete("/notedelete/:id" , authMiddleware,  noteController.noteDelete)
router.get("/search" ,authMiddleware, noteController.searchNote)



module.exports = router;