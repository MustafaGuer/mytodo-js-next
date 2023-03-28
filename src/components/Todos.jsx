import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <ul className="musg-flex musg-gap-5 musg-flex-wrap musg-mt-10">
      {props.items.map((item) => (
        <TodoItem key={item._id} todo={item} onRemoveTodo={props.onRemoveTodo} />
      ))}
    </ul>
  );
};

export default Todos;
