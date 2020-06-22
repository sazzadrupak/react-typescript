import React, { useRef } from "react";

import "./NewTodo.css";
interface AddTodoInterface {
  onAddTodo: (todoText: string) => void;
}

const NewToDo: React.FC<AddTodoInterface> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoTextValue = todoTextRef.current!.value;
    props.onAddTodo(todoTextValue);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={todoTextRef} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default NewToDo;
