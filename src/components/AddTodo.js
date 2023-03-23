import { useState } from "react";

export default function AddTodo({addTodo}) {

  const[value, setValue]= useState("");
  function handleChange(e){
    console.log(e.target.value);
    const todoValue = e.target.value;
    setValue(todoValue)
  }

  function handleClick(){
    
    if(value.trim().length){
    addTodo(value.trim());
    setValue("")
  }else{
    setValue("")
  }}

  return(

  // const [item, setItem] = useState([]);
  <div className="d-flex justify-content-center align-items-center mb20">
    <input type="text"
    value={value}
    placeholder="Add a Todo" 
    onChange={handleChange}
    className="mr20 flex-fill p10"/>

    <button onClick={handleClick} className="btn btn-primary">Add</button>
  </div>
  )

}
 