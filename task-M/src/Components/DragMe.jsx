import React, { useState } from "react";
import "../styles/DragMe.scss";
import ListCard from "./new";

function DragCards() {
  const [widgets, setWidgets] = useState([]);
  const [widgets1, setWidgets1] = useState([]);
  const [widgets2, setWidgets2] = useState([]);
  const [dd, setDd] = useState("");

  const handleOnDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDragStart1 = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDragStart2 = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
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

  const handleWidgetRemove = (index) => {
    const updatedWidgets = [...widgets];
    updatedWidgets.splice(index, 1);
    setWidgets(updatedWidgets);
  };

  const handleWidgetRemove1 = (index) => {
    const updatedWidgets = [...widgets1];
    updatedWidgets.splice(index, 1);
    setWidgets(updatedWidgets);
  };

  const handleWidgetRemove2 = (index) => {
    const updatedWidgets = [...widgets2];
    updatedWidgets.splice(index, 1);
    setWidgets(updatedWidgets);
  };

  const handleInput = (e) => {
    // setDd(e.target.value);
    setDd(e.target.value);
    console.log(e.target);
  };
  const add = (e) => {
    if (e.target.id === "one") {
      console.log("one", dd);
      setWidgets(dd);
      setDd("");
    }
    if (e.target.id === "two") {
      setWidgets1(dd);
      setDd("");
    }
    if (e.target.id === "three") {
      setWidgets2(dd);
      setDd("");
    }
  };
  // console.log("widgets---", widgets);
  return (
    <div>
      <div className="flex">
        {[1, 2, 3].map((item, index) => (
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
          />
        ))}
      </div>
    </div>
  );
}

export default DragCards;
