import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import axios from "axios";

const AllNote = () => {
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://notesapp-backend-o8cg.onrender.com/api/note");
      setNotes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteNote = async (id) => {
    try {
      
      await axios.put(`https://notesapp-backend-o8cg.onrender.com/api/note/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="allnote-container">
      {notes.map((item) => (
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

            <GiRecycle
              onClick={() => deleteNote(item._id)}
              className="deleticon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};




export default AllNote;