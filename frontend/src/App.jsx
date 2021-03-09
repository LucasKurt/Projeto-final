import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

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