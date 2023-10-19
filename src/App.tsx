import React from "react";
import Register from "./components/Register/Register";
// import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
 
const App: React.FC = () => {
  return (
    <Router>
    <div className="container">
      <Routes>
        {/* <Route path = "/Login" element = {<Login/>}/> */}
        <Route path = "/" element = {<Register/>}/>
      </Routes>
    
    </div>
    </Router>
  );
};
 

export default App;


