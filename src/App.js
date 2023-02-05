import {BrowserRouter as Routes, Router, Switch, Route} from 'react-router-dom';

import './App.css';
import './Components/header';
import './Styles/main.css';
import './Components/body';
import './Components/footer';
import Navbar from './Components/header';
import first from './pages/one';
import second from './pages/second';
import three from './pages/three';
import four from './pages/four';


//eslint-disable-next-line 
import styled from 'styled-components';  

function App() {
  return (
    <>
    < Navbar />
    
   
    </>
  );
  <Routes>
        <Route path="/" element={Navbar} />
        <Route path="" element={first} />
        <Route path="" element={ second } />
        <Route path="" element={ three } />
        <Route path="/4th yr" element={four } />
      </Routes>
  (
    <body/>
  );

  (
    <footer />
  )

}

export default App;
