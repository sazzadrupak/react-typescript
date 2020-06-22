import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: todoText },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
