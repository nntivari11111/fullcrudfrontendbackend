import {HomePage} from "./components/HomePage";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Notes} from "./components/Notes"
import CreateNotes from "./components/CreateNotes";
import NotesEdit from"./components/NotesEdit";
import Loogin from "./components/Loogin"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';

function App() {
  return (
    
    <div className="App">
     
      <Routes>  
          <Route path="/" element={<Loogin/>}/>    
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/todos/:id" element={<Notes />}/>
          <Route path="/todos/:id/:_id" element={<NotesEdit />}/>    
      </Routes>
    </div>
  );
}

export default App;
