# vivatech_assignment

Develop a task management react web application
Functionalities
1️⃣ Add a task card to the list
2️⃣ Update/Delete task
3️⃣ Move card to another list
4️⃣ Export the entire list to Excel


# frontend assignment


Deployed link--  https://frontend-assignment-uqbc.vercel.app/


Doc--

Task Management App with Drag and Drop Functionality

This app demonstrates a simple task management application name-  ManageYourTask
with drag and drop functionality implemented using React. The app allows users to manage tasks by categorising them into three columns: "ToDo," "Doing," and "Done." Users can add, edit, and delete tasks within each column and export the task list to an Excel file.

Components:-

DragCards:
The DragCards component serves as the main container for the task management app. It manages the state for the task widgets in each column and handles the drag and drop events.

State Variables:
widgets: An array that stores the task widgets in the "ToDo" column.
widgets1: An array that stores the task widgets in the "Doing" column.
widgets2: An array that stores the task widgets in the "Done" column.

Event Handlers:
handleOnDragStart: Handles the drag start event for a task widget. It sets the data transfer properties for the widget type and card index.
handleOnDrop: Handles the drop event when a task widget is dropped onto a column. It retrieves the widget type and source card index from the data transfer properties and updates the state accordingly.
handleOnDragOver: Handles the drag over event for a column.
Task Management Functions
handleWidgetRemove: Removes a task widget from the specified column.
handleEdit: Modifies the value of a task widget in the specified column.
handleDelete: Deletes a task widget from the specified column.


ListCard:
The ListCard component represents a single column in the task management app. It handles the task-related functionality within the column, including adding, editing, and deleting tasks. It also provides the drag and drop functionality within the column.

State Variables:
input: Holds the input value for adding a new task.
task: An array that stores the tasks in the column.
Event Handlers
addTask: Adds a new task to the column based on the input value.
handleOnDrop: Handles the drop event when a task widget is dropped onto the column.
handleOnDragOver: Handles the drag over event for the column.
editTask: Modifies the value of a task at a specific index in the column.
deleteTask: Deletes a task at a specific index from the column.
exportToExcel: Exports the task list to an Excel file.


Usage:

To use the task management app, import and render the DragCards component in your React application. It will display three columns: "ToDo," "Doing," and "Done." You can drag tasks between columns and perform actions such as adding, editing, and deleting tasks within each column. The task list can be exported to an Excel file by clicking the "Export to Excel" button.

