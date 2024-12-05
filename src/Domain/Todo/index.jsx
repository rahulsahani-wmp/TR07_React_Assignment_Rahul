// import { useEffect } from "react";

// function ToDo() {

//     const [task,settask]=useEffect(gettask);

//    function gettask(){
//     const data=localStorage.getItem(task);
//     JSON.parse(data);
//    }

//     function addtask(){
//         settask(...task,{"name":"rahul"});

//       //add to local storage
//       localStorage.setItem("tasks", JSON.stringify(task));
//     }
//     function deletetask(){
//         //delete from local storage
//       }

//       function marktask(){
//         //mark task completion to local storage
//         if(task.status===true)
//         settask(...task,{status:false})
//     else
//     if(task.status===false)
//         settask(...task,{status:true})
//       }

//   return (
//     <>
//       <div>
//       <input
//           type="text"
//           placeholder="Enter task name"
//           onChange={(e)=>settask(...task,task.name = e.target.value)}
//         /> <button onClick={addtask}>Add task</button>
//       </div>

//       {/* put this in map */}
//       {/* <div>
//         <input type="checkbox" checked={task.status} onChange={marktask}/> task name <button onClick={deletetask}>delete</button>
//       </div> */}
//     </>
//   );
// }
// export default ToDo;
import { useEffect, useState } from "react";
import "./index.css";


function ToDo() {
  const [CatchVal, setCatchVal] = useState(""); // to catch the value of input

  const [tasklist, settasklist] = useState(() => {
    const todoitems = localStorage.getItem("ToDos");
    return todoitems ? JSON.parse(todoitems) : [];
  }); // to store all task from local storage

  const [filter, setfilter] = useState("all");
  //   function addtodos() {
  //     const newtask = {
  //       id: Date.now() + "",
  //       name: CatchVal,
  //     };

  //     settasklist([newtask, ...tasklist]);
  //     setCatchVal("");
  //   }

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(tasklist));
  }, [tasklist]);
  function addtodos(e) {
    e.preventDefault(); // Prevent form from reloading page on submit
    if (CatchVal === "") {
      alert("first write task in input");
    } else {
      const newtask = {
        id: Date.now() + "",
        name: CatchVal,
        status: "pending", // Default status is 'false' (not completed)
      };

      settasklist([newtask, ...tasklist]);
      setCatchVal(""); // Clear the input after adding the task
    }
  }
  function deletetask(id) {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    settasklist(updatedTasklist);
  }

  // function togglestatus(id){
  //    const updatedTasklist=tasklist.map((item)=>{
  //     if(item.id===id)
  //     {
  //        return {...item,status:item.status==='pending'?'completed':'pending'}
  //     }
  //     return item;
  //    })
  //    settasklist(updatedTasklist)
  // }
  function togglestatus(id) {
    const updatedTasklist = tasklist.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === "pending" ? "completed" : "pending",
        };
      }
      return item;
    });
    settasklist(updatedTasklist);
  }

  const filteredlist = tasklist.filter((item) => {
    if (filter === "completed") return item.status === "completed";
    else if (filter === "pending") return item.status === "pending";
    return true; //return all task
  });

  return (
    <div className="container font ">
      <div className="todo_input">
        <form onSubmit={addtodos}>
          <input className="task_input"
            type="text"
            value={CatchVal}
            onChange={(e) => {
              setCatchVal(e.target.value);
              console.log(CatchVal);
            }}
          />
          <button className="addtask_btn font">Add Task</button>
        </form>
      </div>

      <div className="todo_filter ">
        <button
          onClick={() => {
            setfilter("all");
           
          }}
          className="all_btn font"
        >
          All
        </button>
        <button
          onClick={() => {
            setfilter("pending");
          }}
          className="pending_btn font"
        >
          Pending
        </button>
        <button
          onClick={() => {
            setfilter("completed");
          }}
          className="completed_btn font"
        >
          Completed
        </button>
      </div>

      {filteredlist.length > 0 ? (
        filteredlist.map((item, index) => (
          <div className="todo_container">
            <div className="todo_checkbox">
              <input
                type="checkbox"
                checked={item.status === 'completed'}
                onClick={() => togglestatus(item.id)}
              />
            </div>

            <div className="todo_name font">
              <span>{item.name}</span>
              </div>
              <div>
              <button
                className="delete_btn font"
                onClick={(e) => deletetask(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="font filter_message">
          {filter === "completed" && "There is no completed task"}
          {filter === "pending" && "There is no pending task"}
          {filter === "all" && "There is no task available"}
        </p>
      )}
    </div>
  );
}
export default ToDo;
