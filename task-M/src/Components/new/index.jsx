import React, { useState } from "react";
import styles from "../../styles/ListCard.module.scss";

function ListCard({ handleOnDragStart }) {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const addTask = () => {
    setTask([...task, input]);
    setInput("");
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    setTask([...task, widgetType]);
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
        {task.map((item, index) => (
          <div
            className={styles._task}
            key={index}
            draggable
            onDragStart={(e) => handleOnDragStart(e, "widget1")}
          >
            <p>{item}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCard;
