import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid'


function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("")
  const [category, SetCategory]=useState("")
  const [catOption, setCatOption]= useState()


  const optionCategory = categories.map((cat)=><option key={uuidv4()} value={catOption} onChange={(e)=>setCatOption(e.target.value)}>{cat}</option>)
  console.log(optionCategory)

  
  function handleSubmitForm(e){
    e.preventDefault()
    
    const newData = {
      id: uuidv4(),
      text: text, 
      category: category
    }
    // console.log(newData, "test-data")
    onTaskFormSubmit(newData)
  }
  

  return (
    <form className="new-task-form" onSubmit={handleSubmitForm}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=>SetCategory(e.target.value)}>
          {optionCategory.slice(1)}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

/*
Pass the list of categories to this component from App. Then, update this component to display <option> 
elements for each category inside of the <select> element except the "All" category, so that the user 
can select a category when adding a new task.
Next, update this form to be a controlled component, so that all form inputs are captured in state.
When the form is submitted, add a new task to the list with the text and category from the form. 
For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.

*/
