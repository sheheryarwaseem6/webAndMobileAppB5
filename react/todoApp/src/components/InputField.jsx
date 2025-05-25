import { useState } from "react";
import ListItems from "./ListItems";

function InputField() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function handleInput(e) {
    setTask(e.target.value);
  }
  function handleAddTask() {
    // console.log(task)

    setTaskList([...taskList, task]);
    setTask("");
  }
  // console.log(taskList)
  return (
    <div>
      <input
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Enter a task"
        value={task}
        required
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ListItems taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default InputField;
