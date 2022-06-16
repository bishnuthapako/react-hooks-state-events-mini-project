import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid'

function CategoryFilter({categories}) {

  const [category, setCategory]=useState("All")


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* <button>{categories}</button> */}
      {categories.map((item)=><button key={uuidv4()} className={item===category? "selected": null} onClick={(e)=>setCategory(e.target.value)}>{item}</button>)}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;

/*
Pass the list of categories to this component from App. Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need a key prop equal to the category.

When a button is clicked, the following should happen:

Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
If the button for "All" is selected, all the tasks should be displayed.

*/