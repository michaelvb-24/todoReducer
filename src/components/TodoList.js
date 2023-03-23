import TodoItem from "./TodoItem";

export default function TodoList({todoList, deleteTodo, toggleTodo, editTodo, changeTodo}) {
  console.log(todoList);
  
  return todoList.length ? (
    <div>
    <ul>
      {
        todoList.map((todo) => (
          <TodoItem key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          changeTodo={changeTodo}/>
        ))
      }
    </ul>
    </div>
  ) : (
    <>
    <p>Aucune todo</p>
    </>
  );
}
