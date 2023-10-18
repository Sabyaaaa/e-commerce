import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import Button from './Button/Button';

 

const Home: React.FC = () => {
 
    const naviagte = useNavigate();

    const logIn = () => {
        naviagte('/login')
    }

  return (

    <div>
        <button onClick={logIn}>Login</button>
      

    </div>

  );

};

 

export default Home;