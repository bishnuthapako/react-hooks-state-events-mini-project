import React, {useState} from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid'


function TaskList({task, setTask}) {

// const [inputTask, setInputTask]=useState(task)

  

function handleDeleteFromList(note){
  // debugger;
  // console.log(note.target.parentElement)
  const deleteTaskButton = task.filter((item)=> item.text !== note)
  setTask(deleteTaskButton)
}
const displayTask = task.map((item)=> <Task key={uuidv4()} text={item.text} category={item.category} handleDeleteFromList={handleDeleteFromList}/>)

  return (
    <div className="tasks">
      {displayTask}
    {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
