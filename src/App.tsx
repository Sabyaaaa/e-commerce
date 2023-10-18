import React from "react";
import { Routes, Route } from "react-router-dom";
// import LoginPage from 'LoginPage'; // Import the LoginPage component
import LoginPage from "./Components/LoginPage/LoginPage";
import Some from "./Components/Some";
import LogoutButton from "./Components/Logout/Logout";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Home from "./Components/Home";

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Routes>
      {/* <AuthProvider> */}
      <Route path="/" element={<Home />}>
            
          </Route>
          <Route  path="/login" element={<LoginPage />}>
            
          </Route>
        <Route path="/some" element={<Some />} ></Route>
          
       

        {/* <LogoutButton /> */}
      {/* </AuthProvider> */}
    </Routes>
    </AuthProvider>
  );
};

export default App;
