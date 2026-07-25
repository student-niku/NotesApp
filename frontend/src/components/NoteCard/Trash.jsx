import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegStar } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Trash = () => {
  const [trash, setTrash] = useState([]);

  const getTrash = async () => {
    const res = await axios.get("https://notesapp-backend-o8cg.onrender.com/api/trash");
    setTrash(res.data.data);
  };

  useEffect(() => {
    getTrash();
  }, []);

  const handleUpdate = async (id) => {
    const conform = confirm("Note Recyle Yes/No")
      if(!conform){
        return;
      }
    try {
      const res = await axios.put(`https://notesapp-backend-o8cg.onrender.com/api/noteupdate/${id}`);
      getTrash();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const deletNote = async (id)=>{
    try {
      const conform = confirm("Note Deleted Yes/No")
      if(!conform){
        return;
      }
        const res = await axios.delete(`https://notesapp-backend-o8cg.onrender.com/api/notedelete/${id}`)
        getTrash()
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
   <div className="allnote-container">
         {trash.map((item) => (
           <div className="note-card" key={item._id}>
             <div className="card-header">
               <span className="card-dot"></span>
               <FaRegStar className="star-icon" />
             </div>
   
             <h2>{item.title}</h2>
             <p>{item.description}</p>
   
             <div className="card-footer">
              <span className="card-time">
                  {new Date(item.createdAt).toLocaleTimeString("en-IN")}
               </span>
                <MdDelete onClick={()=>deletNote(item._id)} className="delete-icon"/>
               <MdUpdate className="update-icon" onClick={() => handleUpdate(item._id)} />
             </div>
           </div>
         ))}
       </div>
  );
};

export default Trash;