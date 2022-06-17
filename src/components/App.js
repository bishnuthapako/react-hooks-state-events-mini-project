import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  // const [categoryData, setCategoryData] = useState("")
 const [task, setTask]=useState([...TASKS])
//  const [options, setOptions] = useState([...CATEGORIES])

 function onTaskFormSubmit(newData){
  const copyData = [...task, newData]
  setTask(copyData)

 }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
