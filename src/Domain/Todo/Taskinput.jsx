function Taskinput({CatchVal ,addtodos , setCatchVal}){
    return(
        <form  className="todo_input" onSubmit={addtodos}>
        <input className="task_input fw-bold form-control"
          type="text"
          value={CatchVal}
          onChange={(e) => {
            setCatchVal(e.target.value);
            console.log(CatchVal);
          }}
        />
        <button className="addtask_btn fw-bold btn btn-success">Add Task</button>
      </form>
    )
}

export default Taskinput;