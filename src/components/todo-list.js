import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  const listItem = ["Learn React", "Build Awesome App"];

  return (
    <ul>
      <li>
        <TodoListItem label="Drink Coffee" />
      </li>
      <li>
        <TodoListItem label="Learn React!" important />
      </li>
    </ul>
  );
};

export default TodoList;
