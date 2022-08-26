import React from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { useState } from "react";
const NotesEdit=()=>{
const navigate=useNavigate()
const params=useParams();
const {_id}=params
const noteId=_id;
const {id}=params;
const userId=id;
console.log(_id)
const [taskname, settaskname] = useState("")
const [status, setstatus] = useState("")
const [tag, settag] = useState("")
const handletaskname = (e) => {
    settaskname(e.target.value)
}

const handlestatus=(e) => {
    setstatus(e.target.value)
}
const handletag=(e) => {
    settag(e.target.value)
}


const handleSubmit = async () => {
    const payload ={
        taskname,
        status,
        tag,
        userId
    }
    await fetch(`http://localhost:8080/todos/${noteId}/edit`, {
        method : "PATCH",
        body : JSON.stringify(payload),
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }, 
    }).then((res)=>{
        navigate(`/todos/${userId}`)
    }).catch((err)=>{
        alert("something went wrong")
    })
}
return (
    <div>
   <br/>
            <input type="text" placeholder="taskname" value={taskname} onChange={handletaskname}></input> 
            <br/>
            <input type="text" placeholder="status" value={status} onChange={handlestatus}></input>
            <br/>
            <input type="text" placeholder="tag" value={tag} onChange={handletag}></input>
            <br/>
            <button onClick={handleSubmit}>Edit</button>
    </div>
)
}


export default NotesEdit;

