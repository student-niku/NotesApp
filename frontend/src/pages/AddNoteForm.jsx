import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const AddNoteForm = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const conform = confirm("Note Create Yes/No")
      if(!conform){
        return navigate('/');;
      }
      await axios.post("https://notesapp-backend-o8cg.onrender.com/api/note",{
      title,
      description
      })
    } catch (error) {
      console.log(error);
      
    }

  
    navigate('/');

  }
  return (
    <div className="add-note-form">
      <div className="add-note-form-container">
        <h1>Add Note</h1>
        <form onSubmit={handleSubmit} method="POST">
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Note Title" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="content" placeholder="Note Content"></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNoteForm