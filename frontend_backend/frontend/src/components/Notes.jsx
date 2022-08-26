import React, {useState, useEffect} from "react";
import CreateNotes from "./CreateNotes";
import { useParams,useNavigate } from "react-router-dom";
const Notes = () => {
   const token = localStorage.getItem("token")
   const {id} = useParams();
   const [data , setData]=useState([])
  
   const userId=id;
   const navigate=useNavigate()
  
    const getNotes = async(status) => {
       
        await fetch(`http://localhost:8080/todos/read`, {
            method : "GET",
            query:{status},
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}` ,
                userId
            }, 
        })
        .then((res) => res.json())
        .then((res) => {
            setData([...res]);
        })
        .catch((err) => console.log(err)) 
    }
    const getAdd=async(payload)=>{
      await fetch("http://localhost:8080/todos/create", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }, 
        }).then((res)=>{
          getNotes()
        }).catch((err)=>{
            alert("something went wrong")
        })
    }
    useEffect(() => {
      getNotes()
    }, [])

   console.log(data,'ddd')
   const nav=(dj)=>{
    console.log("dji")
navigate(`/todos/${id}/${dj}`)
   }
   const Deleted=async(noteId)=>{
    await fetch(`http://localhost:8080/todos/${noteId}/delete`, {
      method : "DELETE",
      body : JSON.stringify({userId}),
      headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }, 
  }).then((res)=>{
    getNotes()
  }).catch((err)=>{
      alert("something went wrong")
  })
   }
    return (token)?(
        <div>
       <CreateNotes add={getAdd}/>
       <table variant="simple" style={{margin:"auto"}}>
          <thead>
            <tr>
              <th>Taskname</th>
              <th>Status</th>
              <th>Tag</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            
            { data?.map((el)=>(
                <tr >
                <td> {el.taskname} </td>
                <td> {el.status} </td>
                
                <td> {el.tag} </td>
               <td> <button colorScheme={"blue"} onClick={()=> nav(el._id)}>Edit</button></td>
               <td><button colorScheme={"red"} onClick={()=> Deleted(el._id)}>Delete</button></td>
              </tr>
              ))} 
          </tbody>
        </table>
        <button colorScheme={"blue"} onClick={()=> getNotes("pending")}>Statuspending</button>
        <button colorScheme={"blue"} onClick={()=> getNotes("done")}>Statusdone</button>
       </div>
    ):(
<h3>Please login again</h3>
    )
    
}

export  {Notes};