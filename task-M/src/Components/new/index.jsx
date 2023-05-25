import React, { useState } from "react";
import styles from "../../styles/ListCard.module.scss";

function ListCard({
  handleOnDragStart,
  task,
  setTask,
  //  handleOnDrop,
  item,
}) {
  const [input, setInput] = useState("");
  // const [task, setTask] = useState([]);

  const addTask = () => {
    setTask([...task, input]);
    setInput("");
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    setTask([...task, widgetType]);
    console.log("handleOnDrop after droping--", e.target.id);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      className={styles._listCard}
    >
      <div className={styles._input}>
        <textarea
          id="task"
          name="task"
          rows="2"
          cols="1"
          maxLength={100}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></textarea>
        <button onClick={addTask}></button>
      </div>

      <div className={styles._taskWrapper}>
        {task.map((task, index) => (
          <div
            id={item}
            className={styles._task}
            key={index}
            draggable
            onDragStart={(e) => handleOnDragStart(e, task)}
          >
            <p>{task}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCard;
