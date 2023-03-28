import React from "react";

const TodoItem = (props) => {
  const removeTodoHandler = () => {
    props.onRemoveTodo(props.todo._id);
  };

  return (
    <li
      className="musg-p-4 musg-bg-zinc-400 musg-rounded-xl musg-shadow musg-shadow-zinc-700
          musg-font-bold musg-text-zinc-200 hover:musg-shadow-xl musg-cursor-pointer"
      onClick={removeTodoHandler}
    >
      {props.todo.title}
    </li>
  );
};

export default TodoItem;
