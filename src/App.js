// import logo from './logo.svg';
import './App.css';
import './About.css';
import './Contact.css';
import './Mobile.css';
import Navbar from './components/Navbar';
import Onscrollhead from './components/Onscrollhead';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mobilehome from './components/Mobilehome';
import React, { useState, useEffect } from 'react';

function App() {

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1150);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
    <Router>
   <>
      <Switch>
      <Route exact path={['/','/home']}>
      <Navbar/>
      {isDesktop ?   <Onscrollhead/> :  <Mobilehome/> }
      <Footer/>
      </Route>
      <Route exact path='/about'>
      <Navbar/>
        <About/>
        <Footer/>
      </Route>
      <Route exact path='/contact'>
      <Navbar/>
        <Contact/>
        <Footer/>
      </Route>
    </Switch>
 </>
 </Router>
  );
}

export default App;
