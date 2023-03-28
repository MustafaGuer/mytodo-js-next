import React, { useRef, useState } from "react";

const NewTodo = (props) => {
  const todoInputRef = useRef(null);
  const [empty, setEmpty] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (todoInputRef.current.value === "") setEmpty(true);

    props.onAddTodo(todoInputRef.current.value);
    onCancel();
  };

  const onCancel = () => {
    todoInputRef.current.value = "";
  };

  return (
    <div className="musg-w-fit musg-mx-auto musg-bg-white musg-p-10 musg-rounded-xl musg-shadow-lg">
      <form onSubmit={submitHandler}>
        <label
          htmlFor="todo"
          className="musg-block musg-font-bold musg-text-slate-500 musg-ml-1"
        >
          Todo:
        </label>
        <input
          ref={todoInputRef}
          id="todo"
          name="todo"
          placeholder="What is your next todo ?"
          type="text"
          min={3}
          className="musg-block musg-font-bold musg-text-slate-700 placeholder:musg-text-slate-400
          focus-visible:musg-outline-none musg-shadow musg-rounded musg-px-2 musg-py-1"
        />
        {empty && (
          <span className="musg-text-red-500">
            You must enter at least 3 letters!
          </span>
        )}
        <div className="musg-mt-8 musg-flex musg-justify-between">
          <button
            onClick={onCancel}
            type="button"
            className="musg-px-2 musg-py-1 musg-rounded musg-shadow musg-shadow-slate-300 hover:musg-shadow-red-600
          musg-transition-shadow musg-ease-in-out musg-duration-300 musg-font-bold musg-text-red-500"
          >
            Cancel
          </button>
          <button
            className="musg-px-2 musg-py-1 musg-rounded musg-bg-green-400 hover:musg-bg-green-600 musg-text-white musg-font-bold
          musg-transition-colors musg-ease-in-out musg-duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
