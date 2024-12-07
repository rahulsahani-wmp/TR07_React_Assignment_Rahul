function Tasklist({setfilter}){
    return(

        <div className="btn-group  todo_filter" role="group" aria-label="Filter tasks">
        <button
          type="button"
          onClick={() => {
            setfilter("all");
          }}
          className="btn btn-danger fw-bold"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => {
            setfilter("pending");
          }}
          className="btn btn-warning fw-bold"
        >
          Pending
        </button>
        <button
          type="button"
          onClick={() => {
            setfilter("completed");
          }}
          className="btn btn-success fw-bold"
        >
          Completed
        </button>
      </div>
    )
}

export default Tasklist;