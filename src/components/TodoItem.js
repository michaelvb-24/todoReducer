import {useState} from "react";
import EditTodo from "./EditTodo";

export default function TodoItem({todo, deleteTodo}) {
  const [valid, setValid] = useState(false);
    const handleClick = () => {
        setValid(!valid);
    }
  const [modify, setModify] = useState(false);
    const handleModify = () => {
      setModify(!modify);
    }
    if(!modify){
  return (
    <li className="d-flex p10 align-items-center">
      <span className="flex-fill mr10">
        {valid ? <span>✔️</span> : <span></span>}
          {todo.content}
      </span>
      <button onClick={handleClick} className="btn btn-primary mr10"> {valid ? "Réalisé" : "Valider"} </button>
      <button onClick={handleModify} className="btn btn-primary mr10">Modifier</button>
      <button onClick={()=> deleteTodo(todo.id)} className="btn btn-primary-reverse mr10">Supprimer</button>
    </li>
  )} else {
    return (
    <li>
      <EditTodo todo={todo} handleModify={handleModify}/>
    </li>
  )}
}
