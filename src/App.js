import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <div>
          <BrowserRouter>
            <Navbar/>
                <Route exact path="/" render={()=>{
                    return <div>
                        <Header/>
                    </div>
                }}/>
                <Route path="/portfolio" render={()=>{
                    return <div>
                        <Portfolio/>
                    </div>
                }}/>
                <Route path="/about" render={()=>{
                  return <div>
                      <About/>
                  </div>
                }}/>
              <Route path="/contact" render={()=>{
                  return <div>
                      <Contact/>
                  </div>
              }}/>
            <Footer/>
          </BrowserRouter>
      </div>
);
}

export default App;
