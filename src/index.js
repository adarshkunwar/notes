import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import bo from './Components/bo';
import second from './pages/second';
import footer from './Components/footer';

//eslint-disable-next-line
import styled from 'styled-components';  

import reportWebVitals from './reportWebVitals';
import { Prompt, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    
    <Navbar/>
    
    </BrowserRouter>
    </>
);

//eslint-disable-next-line
const root2 = ReactDOM.createRoot2(document.getElementById('root2'));
root2.render(
    <>
    <BrowserRouter>
    <second/>
    </BrowserRouter>
    </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()