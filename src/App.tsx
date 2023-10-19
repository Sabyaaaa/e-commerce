import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingPage from './components/ClothingPage/ClothingPage';
// import Navbar from './components/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App: React.FC = () => {
  return (
    
      <Router>
      
      <div className="content">
        
      <Routes>
        <Route path='/' element={<ClothingPage />} />
      </Routes>
      </div>
     </Router>
  );
};

export default App;
