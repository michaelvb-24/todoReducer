import { useState } from "react";

export default function EditTodo({todo, handleModify}) {
  
  const[value, setValue]= useState(todo.content);

  function handleChange(e){
    const todoValue = e.target.value;
    setValue(todoValue)
  }

  function handleClick(){
    
    if(value.trim().length){
    todo.content = value.trim();
    setValue("")
    handleModify()
  }else{
    setValue("")
    handleModify()
  }}

  function handleCancel(){
    handleModify()
  }

  return(

  <div className="d-flex justify-content-center align-items-center mb20">
    <input type="text"
    value={value}
    placeholder="Add a Todo" 
    onChange={handleChange}
    className="mr20 flex-fill p10"/>

    <button onClick={handleClick} className="btn btn-primary">Save</button>
    <button onClick={handleCancel} className="btn btn-primary">Cancel</button>
  </div>
  )
}
