const userNoteModle = require("../modles/noteModle")


const trashCount = async(req,res) =>{
    try {

     const trash = await userNoteModle.find({
         userId: req.user._id,
         isDeleted: 1,
     });

      res.status(200).json({
      success: true,
      totalNote: totalNote,
      })
    
   } catch (error) {
    console.log(error);
    
   }

}

module.exports={trashCount}