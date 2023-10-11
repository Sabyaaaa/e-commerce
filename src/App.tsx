import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardListing from './components/ClothingPage/ClothingPage';
import Navbar from './Navbar/Navbar';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <CardListing />
    </div>
  );
};

export default App;
