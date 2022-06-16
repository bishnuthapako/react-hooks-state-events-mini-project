import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [categoryData, setCategoryData] = useState([...CATEGORIES])
 const [task, setTask]=useState([...TASKS])

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={categoryData} onTaskFormSubmit={setCategoryData}/>
      <TaskList task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
