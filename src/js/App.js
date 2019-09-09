import './App.css';
import Tabs from './Tabs'
import Header from './Header'
import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';

class App extends Component {
 
  render() {     
      return(
        <div className="Layout">   
            <Header />
            <Tabs>
            <div label="Home">
              <div className="content-bg">
                <Home/>
              </div>
            </div>
            <div label="About">
              <div className="content-bg">
                <About/>
              </div>
            </div>
            <div label="Services">
              <div className="content-bg">
                <Services/>
              </div>
            </div>
            <div label="Contact">
              <div className="content-bg">
               <Contact/>
              </div>
            </div>
            </Tabs>

         </div>
      )
    } 
} 

export default App;