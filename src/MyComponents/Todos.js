import React from "react";
import { TodoItem } from "../MyComponents/TodoItem";


export const Todos = (props) => {
  return (

    <>
    {console.log(props.done)}
    <div className="todos">
      {props.todos.length === 1 ? (
        <p className="noTask">No Tasks yet!</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} done={props.done}/>
          );
        })
      )}
    </div>
    </>
  );
};
