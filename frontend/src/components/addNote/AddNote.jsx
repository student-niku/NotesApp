import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/addnote")}
      className="add-note-button"
    >
      + Add Note
    </button>
  );
};

export default AddNote;