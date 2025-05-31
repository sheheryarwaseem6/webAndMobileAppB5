function ListItems({taskList , setTaskList}) {
  // console.log(taskList);
  function handleDelete( key){
    // console.log(key, "keuy")
    setTaskList(taskList.filter((value, index) => index !== key))
  }
  function handleCompleted(t,key){
    console.log(t, "t"),
    console.log(key, "key")
    setTaskList(taskList.map((value, index)=> index === key ? {...value, isCompleted: true} : value))
    // setTaskList([...taskList, {...t, isCompleted: true}])

  }
  return (
    <div>
      <h1>TODO TASKS</h1>
      {taskList.map((t, key) => {
        return t.isCompleted === true ? "" : <li key={key}> <span onClick={()=> handleCompleted(t , key)}> {t.name} </span><button onClick={()=>handleDelete(key)}>x</button></li> ;
      })}
    </div>
  );
}

export default ListItems;
