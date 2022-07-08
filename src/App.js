import "./App.css";
import React from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [currentTask, setCurrentTask] = React.useState("");

  function handleClick(event) {
    const target = event.target;
  }

  function handleChange(event) {
    const target = event.target;
  }

  return (
    <div className="App">
      <label htmlFor="task">Enter a new task here:</label>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Task"
        value={currentTask}
        onChange={handleChange}
      />
      <button id="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
