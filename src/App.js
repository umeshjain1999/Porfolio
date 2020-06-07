import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/Cv';
import Contact from './components/Contact';

import {BrowserRouter as Router  , Route} from 'react-router-dom';


function App() {
  return (
 <Router>
    {document.title = `Portfolio 👦`}
      <div>
     
     <Nav></Nav>
     <Route path = "/" exact component = {Intro}/>
     <Route path="/project" component = {Project}/>
     <Route path="/about" component = {About}/>
     <Route path="/contact" component = {Contact}/>
     
   </div>
 </Router>
  )
}

export default App;
