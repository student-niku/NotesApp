import React from "react";
import AllNote from "../NoteCard/AllNote";
import Trash from "../NoteCard/Trash";
const HeroRight = ({ activeTab }) => {
  return (
    <div className="heroright">
      {activeTab === "Home" && [<AllNote />]}

      {activeTab === "Notes" && <h1>📝 Notes Content</h1>}

      {activeTab === "Settings" && <Trash/>}
    </div>
  );
};

export default HeroRight;