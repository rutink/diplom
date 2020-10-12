import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (<div>
          <BrowserRouter>
            <Navbar/>
                <Route exact path="/" render={()=>{
                    return <div>
                        <Header/>
                    </div>
                }}/>
                <Route exact path="/portfolio" render={()=>{
                    return <div>
                        <Portfolio/>
                    </div>
                }}/>
                <Route exact path="/about" render={()=>{
                  return <div>
                      <About/>
                  </div>
                }}/>
            <Footer/>
          </BrowserRouter>
      </div>
);
}

export default App;
