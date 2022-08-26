import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate()
    return(
        <div>
        <h1>Home Page</h1>
        <button onClick={()=> navigate("/register")}>Register</button>
        <button  onClick={()=> navigate("/login")}>Login</button>
        </div>
    )
}

export  {HomePage};