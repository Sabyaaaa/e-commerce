import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingPage from './components/ClothingPage/ClothingPage';
// import Navbar from './components/Navbar/Navbar';
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthProvider from './components/AuthProvider/AuthProvider';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList';
import { useState } from 'react';
// import './App.scss';
import Nav from './components/Nav';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart />: <ProductList />

  const content = (
    <>
      {/* <Navbar onGenderChange={onGenderChange}/> */}
      {/* <Navbar  viewCart={viewCart} setViewCart={setViewCart} /> */}
      {/* <Header  viewCart={viewCart} setViewCart={setViewCart} /> */}
     
      {/* <Footer viewCart = {viewCart} /> */}
    </>
  )



  return (
    <>
    {/* {content} */}
    <AuthProvider>
     
      
      
        
      <Routes>
        <Route path='/' element={<ClothingPage/>} />
        <Route  path="/login" element={<LoginPage />}></Route>
        {/* <Route  path="/register" element={<LoginPage />}></Route> */}
        {/* <Route path='/' element={<ProductList/>} /> */}
      <Route path='/cart' element={<Cart/>} />
      </Routes>
  
    
     </AuthProvider>

     </>
  );
};

export default App;



    

function handleGenderChange(gender: string): void {
  throw new Error('Function not implemented.');
}

function onGenderChange(gender: string): void {
  throw new Error('Function not implemented.');
}
    