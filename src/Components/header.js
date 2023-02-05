import { useRef } from "react";

import {FaBars, FaMoon, FaTimes,} from 'react-icons/fa'

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
//CSS///
import '../Styles/main.css';

const path=window.location.pathname

function App(){ const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'
);
   function myFunction () {
        if (theme === 'light')
            setTheme('dark');

        else
            setTheme('light');
    }
    useEffect(() => {
            localStorage.setItem('theme', theme);
            document.body.className = theme;
          }, [theme]);
};

//Close and open menu on phone//
function Navbar() {
const navRef = useRef();

const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
}
//////////////////////////////////webcontents///////////////////////////////
return(
<header>

    <h1 >BPAL Class Notes</h1>

    <nav  style={{right:'0px'}} ref={navRef} className="menu1">
        <Link to="/first" >1st yr </Link>
        <Link to="/second" >2nd yr</Link>
        <Link to="/three" >3rd yr</Link>
        <Link to="/four" >4th yr</Link>
        
         
        <button style={{fontSize:'28px', cursor:'pointer',}} 
        className="App {$theme}"
        onClick={App()} >
        <FaMoon/> </button>
        

        <button style={{color: '#000000'}}
        className="nav-btn nav-close-btn" onClick={showNavbar} >
            <FaTimes/>
        </button>
    </nav>

    <button className="nav-btn" onClick={showNavbar} >
        <FaBars/>
    </button>
    
</header>

    );
}

function CustomLink({to, children,...props}) {

    if (path === to)
    return(
    <Link className="" to={to}>{children} </Link>
    )

}

export default Navbar;