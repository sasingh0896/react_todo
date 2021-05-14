import React ,{useState} from 'react';
import CreateTask from '../modals/CreateTask'

const TodoList =()=>{

    const [modal, setModal] = useState(false);
    const [tasklist, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskobj)=>{
        const tempList = tasklist
        tempList.push(taskobj);
        setTaskList(tempList);
        setModal(false);
    }
     return(
         <>
         <div className=" header text-center">
            <h3>TODO LIST</h3>
            <button className ="btn btn-primary mt-2" onClick = {()=> setModal(true)}>Create Task</button>
         </div>
         <div className="card-container ">
             {tasklist.map((obj)=>(
                 <li>{obj.Name}</li>
             ))}
         </div>
         <CreateTask toggle ={toggle} modal = {modal} save = {saveTask}/>
   </>
       
     ); 
}
export default TodoList;