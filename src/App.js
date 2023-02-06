import {BrowserRouter as Routes, Router, Switch, Route} from 'react-router-dom';


import './Components/header';
import './Styles/main.css';
import './Components/bo';
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
      <Routes>
        <Route path="/" element={<first/>} />
        <Route path="/1st yr" element={first} />
        <Route path="/2nd yr" element={ second } />
        <Route path="/3rd yr" element={ three } />
        <Route path="/4th yr" element={four } />
      </Routes>
    <body/>
    </>
  );
}

export default App;
