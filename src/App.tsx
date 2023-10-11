import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingPage from './components/ClothingPage/ClothingPage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ClothingPage />
      </div>
    </div>
  );
};

export default App;
