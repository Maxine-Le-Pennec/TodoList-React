import React from "react";

const Line = ({ task }) => {
  return (
    <div className="todoList">
      <p className={task.isDone === true ? "underline" : null}>
        <FontAwesomeIcon
          icon="square"
          onClick={() => {
            const newTab = [...taskList];
            newTab[index].isDone = !newTab[index].isDone;
            setTaskList(newTab);
          }}
        />

        <span>{task.taskName}</span>

        <button
          onClick={() => {
            deleteTask(index);
          }}
        >
          <FontAwesomeIcon icon="trash" />
        </button>
      </p>
    </div>
  );
};

export default Line;
