import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import React, {useState} from 'react';
import Topper from './topper.js';
import Home from './home.js';
import AboutMe from './aboutme.js';
import Projects from './projects.js';
import Experience from './experience.js';
import Achievements from './achievements.js';

function App(){
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  }
  window.addEventListener('scroll', toggleVisible);
    return (
      <div className="App">
        <Topper/>
        <a href = "/#"><button class='return' style={{display: visible ? 'inline' : 'none'}} >🔼</button></a>
        <span id = "home"><Home/></span>
        <span id = "aboutme"><AboutMe/></span>
        <span id = "projects"><Projects/></span>
        <span id = "experience"><Experience/></span>
        <span id = "achievements"><Achievements/></span>
      </div>
    );
}

export default App;
