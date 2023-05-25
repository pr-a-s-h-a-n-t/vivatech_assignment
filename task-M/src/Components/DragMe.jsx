import React, { useState } from "react";
import styles from "../styles/DragMe.module.scss";
import ListCard from "./new";

function DragCards() {
  const [widgets, setWidgets] = useState([]);
  const [widgets1, setWidgets1] = useState([]);
  const [widgets2, setWidgets2] = useState([]);

  const handleOnDragStart = (e, widgetType, cardIndex) => {
    e.dataTransfer.setData("widgetType", widgetType);
    e.dataTransfer.setData("cardIndex", cardIndex);
  };

  const handleOnDrop = (e, cardIndex) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    const sourceCardIndex = e.dataTransfer.getData("cardIndex");

    if (cardIndex !== sourceCardIndex) {
      if (sourceCardIndex === "0") {
        const updatedWidgets = [...widgets];
        updatedWidgets.splice(widgetType, 1);
        setWidgets(updatedWidgets);
      } else if (sourceCardIndex === "1") {
        const updatedWidgets = [...widgets1];
        updatedWidgets.splice(widgetType, 1);
        setWidgets1(updatedWidgets);
      } else if (sourceCardIndex === "2") {
        const updatedWidgets = [...widgets2];
        updatedWidgets.splice(widgetType, 1);
        setWidgets2(updatedWidgets);
      }

      if (cardIndex === "0") {
        setWidgets([...widgets, widgetType]);
      } else if (cardIndex === "1") {
        setWidgets1([...widgets1, widgetType]);
      } else if (cardIndex === "2") {
        setWidgets2([...widgets2, widgetType]);
      }
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleWidgetRemove = (index, cardIndex) => {
    if (cardIndex === "0") {
      const updatedWidgets = [...widgets];
      updatedWidgets.splice(index, 1);
      setWidgets(updatedWidgets);
    } else if (cardIndex === "1") {
      const updatedWidgets = [...widgets1];
      updatedWidgets.splice(index, 1);
      setWidgets1(updatedWidgets);
    } else if (cardIndex === "2") {
      const updatedWidgets = [...widgets2];
      updatedWidgets.splice(index, 1);
      setWidgets2(updatedWidgets);
    }
  };

  const handleEdit = (index, value, cardIndex) => {
    if (cardIndex === "0") {
      const updatedWidgets = [...widgets];
      updatedWidgets[index] = value;
      setWidgets(updatedWidgets);
    } else if (cardIndex === "1") {
      const updatedWidgets = [...widgets1];
      updatedWidgets[index] = value;
      setWidgets1(updatedWidgets);
    } else if (cardIndex === "2") {
      const updatedWidgets = [...widgets2];
      updatedWidgets[index] = value;
      setWidgets2(updatedWidgets);
    }
  };

  const handleDelete = (index, cardIndex) => {
    if (cardIndex === "0") {
      const updatedWidgets = [...widgets];
      updatedWidgets.splice(index, 1);
      setWidgets(updatedWidgets);
    } else if (cardIndex === "1") {
      const updatedWidgets = [...widgets1];
      updatedWidgets.splice(index, 1);
      setWidgets1(updatedWidgets);
    } else if (cardIndex === "2") {
      const updatedWidgets = [...widgets2];
      updatedWidgets.splice(index, 1);
      setWidgets2(updatedWidgets);
    }
  };

  return (
    <div className={styles._container}>
      <h1>
        Your Task <span> Manager</span>
      </h1>
      <div className={styles.flex}>
        {["ToDo", "Doing", "Done"].map((item, index) => (
          <ListCard
            key={index}
            item={item}
            className={styles.droparea}
            // handleOnDrop={handleOnDrop}
            handleOnDrop={(e) => handleOnDrop(e, index.toString())}
            handleOnDragOver={handleOnDragOver}
            handleOnDragStart={(e, widgetType) =>
              handleOnDragStart(e, widgetType, index.toString())
            }
            widgets={index === 0 ? widgets : index === 1 ? widgets1 : widgets2}
            handleWidgetRemove={handleWidgetRemove}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default DragCards;