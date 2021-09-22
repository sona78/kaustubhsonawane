import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import React, {useState, useEffect} from 'react';
import Topper from './topper.js';
import Home from './home.js';
import Projects from './projects.js';
import Footer from './footer.js';
import Experience from './experience.js';
import LoadingScreen from './loadingscreen.js';

function App(){
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
    setTimeout(function () {
      setLoading(false)
    }, 2000);

  }, [])
  
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
      {loading === false ? (
      <div className="App">
        <Topper/>
        <a href = "/#"><button class='return' style={{display: visible ? 'inline' : 'none'}} >🔼</button></a>
        <span id = "home"><Home/></span>
        <span id = "experience"><Experience/></span>
        <span id = "projects"><Projects/></span>
        <Footer/>
      </div>
      ) :(
        <LoadingScreen />
      )}
      </>
    );
}

export default App;
