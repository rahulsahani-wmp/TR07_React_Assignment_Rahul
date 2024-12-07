import { useEffect, useState } from "react";
import Tasklist from "./Tasklist";
import "./index.css";
import Taskinput from "./Taskinput";
import Taskitem from "./Taskitem";


function ToDo() {
  const [CatchVal, setCatchVal] = useState(""); // to catch the value of input

  const [tasklist, settasklist] = useState(() => {
    const todoitems = localStorage.getItem("ToDos");
    return todoitems ? JSON.parse(todoitems) : [];
  }); // to store all task from local storage

  const [filter, setfilter] = useState("all"); //to store filtered tasks

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(tasklist));
  }, [tasklist]);

  // function to add tasks
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

  //to delete task
  function deletetask(id) {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    settasklist(updatedTasklist);
  }
  //change task status of completion
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

  //filter the tasks
  const filteredlist = tasklist.filter((item) => {
    if (filter === "completed") return item.status === "completed";
    else if (filter === "pending") return item.status === "pending";
    return true; //return all task
  });

  return (
    <div className="todo_main_container">
      <Taskinput
        CatchVal={CatchVal}
        addtodos={addtodos}
        setCatchVal={setCatchVal}
      />

      <Tasklist setfilter={setfilter} />

      <Taskitem
        filteredlist={filteredlist}
        filter={filter}
        togglestatus={togglestatus}
        deletetask={deletetask}
      />
    </div>
  );
}
export default ToDo;
