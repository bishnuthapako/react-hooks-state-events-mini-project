import React from "react";

function Task({text, category, handleDeleteFromList}) {


  return (
    <div className="task">
      <div className="label" >{category}</div>
      <div className="text" >{text}</div>
      <button className="delete" onClick={()=>handleDeleteFromList(text)}>X</button>
    </div>
  );
}

export default Task;
