import React, { useEffect, useState } from "react";
import { GrNotes } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
const HeroLeft = ({ activeTab, setActiveTab }) => {
 const [total, setTotal] = useState(0);
 const [trash, setTrash] = useState(0);


const countTotal = async () => {
  try {
    
    const res = await axios.get("https://notesapp-backend-o8cg.onrender.com/api/notecount");

     setTotal(res.data.totalNote);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  countTotal();
}, []);

const trashCount = async()=>{
  try {
    const res = await axios.get("https://notesapp-backend-o8cg.onrender.com/api/trashcount")
    setTrash(res.data.totalNote);
    
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(()=>{
  trashCount()
},[])
    
  return (
    <div className="heroleft">
      <button onClick={() => setActiveTab("Home")}>
        <div className="icon">
          <GrNotes /> All Notes
        </div> 
        <div><span>{total}</span></div>
      </button>

      <button onClick={() => setActiveTab("Notes")}>
         <div className="icon">
         <CiStar />Favorite Notes
        </div> 
        <div><span>0</span></div>
      </button>

      <button onClick={() => setActiveTab("Settings")}>
        <div className="icon">
          <MdOutlineDelete /> Trash Notes
        </div>
        <div><span>{trash}</span></div>
      </button>
    </div>
  );
};

export default HeroLeft;