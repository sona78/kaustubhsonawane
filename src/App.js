import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import React, {useState} from 'react';
import Topper from './topper.js';
import Home from './home.js';
import Projects from './projects.js';
import Footer from './footer.js';
import Experience from './experience.js';
import Activities from './activities.js';

function App(){
  const [visible, setVisible] = useState(false);
    /*
    axios
      .get('https://gitconnected.com/v1/portfolio/sona78')
      .then((response) => {
        setInfo(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      });
     */
  
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
      <>
      <div className="App">
        <Topper/>
        <a href = "/#"><button class='return' style={{display: visible ? 'inline' : 'none'}} >🔼</button></a>
        <span id = "home"><Home/></span>
        <span id = "experience"><Experience/></span>
        <span id = "activities"><Activities/></span>
        <span id = "projects"><Projects/></span>
        <Footer/>
      </div>
      </>
    );
}

export default App;
