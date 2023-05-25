import React, { useState } from "react";
import "../styles/DragMe.scss";
import ListCard from "./new";

function DragCards() {
  const [widgets, setWidgets] = useState([]);
  const [widgets1, setWidgets1] = useState([]);
  const [widgets2, setWidgets2] = useState([]);
  const [dd, setDd] = useState("");
  const [task, setTask] = useState([]);
  const [task1, setTask1] = useState([]);
  const [task2, setTask2] = useState([]);

  const handleOnDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
    console.log("handleOnDragStart--", e.target.id, " widgetType ", widgetType);
  };

  const handleOnDrop = (e) => {
    console.log("handleOnDrop--", e);

    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    const widgetsList = [...widgets, widgetType];
    setWidgets(widgetsList);
  };

  const handleOnDrop1 = (e) => {
    console.log("handleOnDrop1--", e);

    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    const widgetsList = [...widgets1, widgetType];
    setWidgets1(widgetsList);
  };

  const handleOnDrop2 = (e) => {
    console.log("handleOnDrop2--", e);

    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    const widgetsList = [...widgets2, widgetType];
    setWidgets2(widgetsList);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  // console.log("widgets---", widgets);
  return (
    <div>
      <div className="flex">
        {["ToDo", "Doing", "Done"].map((item, index) => (
          <ListCard
            key={index}
            item={item}
            className="drop-area"
            handleOnDrop={
              index === 0
                ? handleOnDrop
                : index === 1
                ? handleOnDrop1
                : handleOnDrop2
            }
            handleOnDragOver={handleOnDragOver}
            handleOnDragStart={handleOnDragStart}
            task={index === 0 ? task : index === 1 ? task1 : task2}
            setTask={index === 0 ? setTask : index === 1 ? setTask1 : setTask2}
          />
        ))}
      </div>
    </div>
  );
}

export default DragCards;
