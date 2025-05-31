function CompletedItems({ taskList, setTaskList }) {
  console.log(taskList);
  return (
    <div>
      <h1>COMPLETED TASKS</h1>
      {taskList.map((t, key) => {
        return t.isCompleted ? <li key={key}>{t.name}</li> : "";
      })}
    </div>
  );
}

export default CompletedItems;
