const userNoteModle = require("../modles/noteModle");

// Create Note
const noteCreat = async (req, res) => {
  const { title, description } = req.body;

  try {
    const data = await userNoteModle.create({
      userId: req.user._id,
      title,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Data saved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Notes
const getNote = async (req, res) => {
  try {
    const getData = await userNoteModle.find({
      userId: req.user._id,
      isDeleted: 0,
    });

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: getData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Move Note to Trash
const deleteNote = async (req, res) => {
  try {
    const note = await userNoteModle.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user._id,
      },
      {
        isDeleted: 1,
      },
      {
        new: true,
      }
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note moved to Trash",
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Trash Notes
const getTrashNote = async (req, res) => {
  try {
    const trash = await userNoteModle.find({
      userId: req.user._id,
      isDeleted: 1,
    });

    res.status(200).json({
      success: true,
      message: "Trash notes fetched successfully",
      data: trash,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Restore Note
const UdateNote = async (req, res) => {
  try {
    const note = await userNoteModle.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user._id,
      },
      {
        isDeleted: 0,
      },
      {
        new: true,
      }
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note restored successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Permanent Delete
const noteDelete = async (req, res) => {
  try {
    const deleteData = await userNoteModle.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!deleteData) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: deleteData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Search Note
const searchNote = async (req, res) => {
  const { title = "" } = req.query;

  try {
    const data = await userNoteModle.find({
      userId: req.user._id,
      isDeleted: 0,
      title: {
        $regex: title,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      message: "Data search successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  noteCreat,
  getNote,
  deleteNote,
  getTrashNote,
  UdateNote,
  noteDelete,
  searchNote,
};