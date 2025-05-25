function ListItems({taskList , setTaskList}) {
  console.log(taskList);
  function handleDelete(t){
    setTaskList(taskList.filter((value) => value !== t))
  }
  return (
    <div>
      {taskList.map((t, key) => {
        return <li key={key}>{t} <button onClick={()=>handleDelete(t)}>x</button></li>;
      })}
    </div>
  );
}

export default ListItems;
