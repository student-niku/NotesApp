const noteModle = require("../modles/noteModle");
const userNoteModle = require("../modles/noteModle")

const noteCreat = async (req,res)=>{

 const { title, description } = req.body;
    
try {

    const data = await userNoteModle.create({
        title,
        description,
    });


    res.status(201).json({
          message: "Data saved successfully",
      data,
    })

} catch (error) {
    res.status(500).json({
      message: error.message,
    });
}
    
};

const getNote = async function(req,res){
    try {
       const getData = await userNoteModle.find({
       isDeleted: 0,
        });
         res.status(200).json({
         success: true,
         message: "Data fetched successfully",
         data:getData
        })
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
    });
    }
}

const deleteNote = async (req, res) => {
  try {
    const note = await userNoteModle.findByIdAndUpdate(
      req.params.id,
      {
        isDeleted: 1,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Note moved to Trash",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTrashNote = async (req, res) => {
  try {

    const trash = await userNoteModle.find({
      isDeleted: 1,
    });

    res.status(200).json({
      success: true,
      data: trash,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const UdateNote = async (req, res) => {
  try {
    const note = await userNoteModle.findByIdAndUpdate(
      req.params.id,
      {
        isDeleted: 0,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Note restored from Trash",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const noteDelete = async (req,res)=>{
     
  try {
     const  id  = req.params.id;
     const deleteData = await userNoteModle.findByIdAndDelete(id)

    if (!deleteData) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

     res.status(200).json({
      message:"Note Deleted Successfully",
      data:deleteData
     })
  } catch (error) {
       res.status(500).json({
       success: false,
       message: error.message,
    });
  }
}

const searchNote = async(req,res)=>{
  const {title} = req.query;
  try {
    const data = await userNoteModle.find({
        title:{
           $regex:title,
           $options:"i"
        },
   
    })
    res.status(200).json({
      message : "data search successfully",
      data:data
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      massege:error.massege
    })
  }
}
module.exports = {noteCreat,getNote,deleteNote,getTrashNote,UdateNote,noteDelete,searchNote}