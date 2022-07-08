import "./App.css";
import React from "react";
import Overview from "./components/Overview";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [currentTask, setCurrentTask] = React.useState({});

  //Create unique ID's to use as the key value when mapping elements in Overview component
  const [uniqueID, setUniqueId] = React.useState(1);

  function increment() {
    setUniqueId((prev) => prev + 1);
  }

  function handleClick() {
    setTasks((prev) => [...prev, currentTask]);
    increment();
    setCurrentTask({});
  }

  function handleChange(event) {
    const target = event.target;
    setCurrentTask({ id: uniqueID, text: target.value });
  }

  function deleteTask(num) {
    setTasks((prev) => prev.filter((curr) => curr.id != num));
  }

  return (
    <div className="App">
      <label htmlFor="task">Enter a new task here:</label>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Task"
        value={currentTask.text || ""}
        onChange={handleChange}
      />
      <button id="submit" onClick={handleClick}>
        Submit
      </button>
      <Overview tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
