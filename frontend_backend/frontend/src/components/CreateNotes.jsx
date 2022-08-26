import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const CreateNotes = ({add}) => {
    const [taskname, settaskname] = useState("")
    const [status, setstatus] = useState("")
    const [tag, settag] = useState("")
    const params=useParams()
    const {id}=params
    const userId=id
    
    const handletaskname = (e) => {
        settaskname(e.target.value)
    }

    const handlestatus = (e) => {
        setstatus(e.target.value)
    }
    const handletag = (e) => {
        settag(e.target.value)
    }

    const handleSubmit = async () => {

        const payload ={
            taskname,
            status,
            tag,
            userId
        }
        add(payload)
    }
    return(
        <div>
            <br/>
            <input type="text" placeholder="taskname" value={taskname} onChange={handletaskname}></input> 
            <br/>
            <input type="text" placeholder="status" value={status} onChange={handlestatus}></input>
            <br/>
            <br/>
            <input type="text" placeholder="tag" value={tag} onChange={handletag}></input> 
            <br/>
            <button onClick={handleSubmit}>createNotes</button>
        </div>
    )
}

export  default CreateNotes;