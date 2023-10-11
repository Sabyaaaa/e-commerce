import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardListing from './components/ClothingPage/ClothingPage';
import Navbar from './components/Navbar/Navbar';
import './App.css'; // Import the CSS file for App

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <CardListing />
      </div>
    </div>
  );
};

export default App;
