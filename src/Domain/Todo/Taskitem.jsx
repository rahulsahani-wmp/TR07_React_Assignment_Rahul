function Taskitem({filteredlist,togglestatus,deletetask,filter}){
    return(
        <>
      {filteredlist.length > 0 ? (
        filteredlist.map((item, index) => (
          <div className="todo_container">
            <div className="todo_checkbox">
              <input className="form-check-input form-check-lg checkbox"
                type="checkbox"
                checked={item.status === 'completed'}
                onClick={() => togglestatus(item.id)}
              />
            </div>
 

            <div className="todo_name fw-bold fs-5">
              <span>{item.name}</span>
              </div>
              <div>
              <button
                className="btn btn-danger fw-bold"
                onClick={(e) => deletetask(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="fs-2 fw-bold filter_message">
          {filter === "completed" && "There is no completed task"}
          {filter === "pending" && "There is no pending task"}
          {filter === "all" && "There is no task available"}
        </p>
      )}
    </>
    )
}

export default Taskitem;