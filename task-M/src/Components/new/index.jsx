import React, { useState } from "react";
import styles from "../../styles/ListCard.module.scss";
import * as XLSX from "xlsx";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ListCard({ handleOnDragStart, item }) {
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

  const editTask = (index) => {
    const editedTask = prompt("Edit task", task[index]);
    if (editedTask !== null && editedTask !== "") {
      const updatedTask = [...task];
      updatedTask[index] = editedTask;
      setTask(updatedTask);
    }
  };

  const deleteTask = (index) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  };

  const exportToExcel = (e) => {
    const listName = e.target.id;
    console.log(listName);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(
      task.map((item) => ({ Task: item }))
    );

    XLSX.utils.book_append_sheet(workbook, worksheet, `${listName} List`);
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAsExcelFile(excelBuffer, `${listName} List`);
  };

  const saveAsExcelFile = (buffer, fileName) => {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        className={styles._listCard}
      >
        <label id="lable">{item}</label>
        <div className={styles._input}>
          <textarea
            id="task"
            name="task"
            rows="2"
            cols="1"
            placeholder="Enter task"
            maxLength={100}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
          <button onClick={addTask}>Add</button>
        </div>

        <div className={styles._taskWrapper}>
          <table id="taskTable" style={{ width: "100%" }}>
            <tbody className={styles._taskWrapper}>
              {task.map((item, index) => (
                <tr
                  className={styles._task}
                  key={index}
                  draggable
                  style={{ wordBreak: "break-all" }}
                  onDragStart={(e) => handleOnDragStart(e, item)}
                >
                  <td>{item}</td>
                  <td>
                    <EditIcon onClick={() => editTask(index)} />
                    <DeleteIcon onClick={() => deleteTask(index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className={styles._exportBtn}
            id={item}
            onClick={(e) => exportToExcel(e)}
          >
            Export to Excel
          </button>
        </div>
      </div>
    </>
  );
}

export default ListCard;
