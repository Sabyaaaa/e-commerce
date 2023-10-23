import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingPage from './Components/ClothingPage/ClothingPage';
// import Navbar from './components/Navbar/Navbar';
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthProvider from './Components/AuthProvider/AuthProvider';
import LoginPage from './Components/LoginPage/LoginPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
     
      
      
        
      <Routes>
        <Route path='/' element={<ClothingPage />} />
        <Route  path="/login" element={<LoginPage />}></Route>
        {/* <Route  path="/register" element={<LoginPage />}></Route> */}
      </Routes>
  
    
     </AuthProvider>
  );
};

export default App;



    
    