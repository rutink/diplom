import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
      <div>
        <Navbar/>
        <Header/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
);
}

export default App;
