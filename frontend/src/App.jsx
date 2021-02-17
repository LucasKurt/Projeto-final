import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Routes from './Components/Routes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes/>
        <Footer />
      </BrowserRouter>      
    </>
  );
}

export default App;