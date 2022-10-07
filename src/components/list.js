// So I can use states:
import { useState } from "react";

// I am setting up states here so I can pass data to the database and back again. 
function List() {
    // useState is empty initially, so it can later be changed
    const [newDesc, setNewDesc] = useState("");
    // Can useState be repeated?
    const [newDate, setNewDate] = useState("");
    // these lines change the above states when the inputs are changed
    const handleDescChange = (text) => {
        setNewDesc(text);
    }
    const handleDateChange = (date) => {
        setNewDate(date);
    }

    /*const saveTask = () => {
      const task = {
          desc: newDesc,
          date: newDate,
          complete: false
      }
  
      setTaskList([...taskList, task]);
    } */

    return (
        <div className="">
            <input
                type="text"
                className="newTask"
                placeholder="Add new Task"
                value={newDesc}
                onChange={(e) => { handleDescChange(e) }} />
            <input
                type="date"
                className="newDate"
                value="newDate"
                onChange={(e) => { handleDescChange(e) }}
                // can e be the same here?
                min="2022-10-06"
                max="2100-10-06" />
            <button>
                {/* need to be className? */}
                <i class="fa fa-plus"></i>
            </button>
            {/* map the tasks here */}
            {/* what a task looks like: */}
            <li>
                <button>
                    <i class="completeTask fa"></i>
                </button>
                <button>
                    <i class="editTask fa"></i>
                </button>
                <span>(taskDesc)</span>
                <span>(taskDate)</span>
                <button>
                    <i class="deleteTask fa fa-trash"></i>
                </button>
            </li>







        </div>

    );
}

export default List;

// list logic, (not in correct area, make redux later)
/* document.getElementsByClassName("newTask").keypress(function(taskCreate){
if(taskCreate.KeyboardEvent.key == 13 | newTaskButton.click){
    
}

}); */