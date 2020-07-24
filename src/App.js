import React , {useState , useEffect}from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/Cv';
import Contact from './components/Contact';

import {BrowserRouter as Router  , Route} from 'react-router-dom';


function App() {

  const [isLoading , setIsLoading] = useState(true);

  useEffect(()=>{
    /*to check whether the DOM is ready or not*/
    window.onload = function(){
      setIsLoading(false);
    }
    /*because for some reason windows.onload/document.onload/document.onreadtstatechange not working in mobile device */
    if (window.screen.width <= 700 ){
      setIsLoading(false);
    }
  },[])

  return (
 (isLoading)? (

 <div className = 'svg-loader' style = {{
   height : '100vh',
   display : 'grid',
   placeItems : 'center',
   background : '#EFFFFD'
 }}>
 {   /*
  <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
  <!-- Todo: add easing -->
  */}
 <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stopColor="#00c853" stopOpacity="0" offset="0%"/>
            <stop stopColor="#00c853" stopOpacity=".631" offset="63.146%"/>
            <stop stopColor="#00c853" offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
 </div>

 ):(
  <Router>
    
  <div>
 
 <Nav></Nav>
 <Route path = "/" exact component = {Intro}/>
 <Route path="/project" component = {Project}/>
 <Route path="/about" component = {About}/>
 <Route path="/contact" component = {Contact}/>
 
</div>
</Router>
 )
  )
}

export default App;
