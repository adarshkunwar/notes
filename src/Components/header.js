import { useRef } from "react";

import {FaBars, FaCloudUploadAlt, FaFolder, FaMoon, FaTimes,} from 'react-icons/fa'

import uploadd from "./scripts";

import Prompt from "./welkam";

import dark from "./script";

import { Link } from "react-router-dom";


//CSS///
import '../Styles/main.css';



//Close and open menu on phone//
function Navbar() {
const navRef = useRef();

const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
}

//////////////////////////////////webcontents///////////////////////////////
return(
    <>
<header onload={uploadd} >
    <h1 >Class Notes & Revision papers</h1>
    <nav  style={{right:'0px'}} ref={navRef} className="menu1">
        <Link to="/1st yr" >BBITM </Link>
        <Link to="/2nd yr" >BPAL</Link>
        <Link to="/3rd yr" >BHRM</Link>
        <Link to="/4th yr" >BENT</Link>
        <Link to="/4th yr" >BSM</Link>
        <Link to="/4th yr" >BPM</Link>
        <Link to="/4th yr" >Past Papers</Link>

        <button style={{fontSize:'22px', bottom: '10px', cursor:'pointer',}} 
        className="App {$theme}"
        onClick={dark} >
        <FaMoon/> </button>
        <button style={{color: '#000000'}}

        className="nav-btn nav-close-btn" onClick={showNavbar} >
            <FaTimes/>
        </button>
    </nav>

    <button id="m" onClick={showNavbar} >
        <FaBars/>
    </button>
    
</header>

<div>
<button onClick={uploadd} onchange={uploadd} className="upbtn">
    <p className="pcloud" >Upload your notes here </p><span class="cloud"><FaCloudUploadAlt/></span>
    <button className="selector"  id="upload" multiple size="50" 
     
         type="file">
        <span className="cloud2">
        <  FaFolder/>
        </span>
        <span className="small">
            Select Files
            </span>
        
    </button>
    
    <i style={{fontSize:"21px"}} className="pcloud">Allowed formats *.docx, .pdf, .pptx</i>
</button>
</div>
<div className="footer">
    <footer>
        <p>Copyright @ 2023</p>
    </footer>
</div>
</>
    );

{{<Prompt message="This is the Admin Page!"/>}}
}


//eslint-disable-next-line 
function CustomLink({to, children,...props}) {

    if (path === to)
    return(
    <Link className="" to={to}>{children} </Link>
    )

}

export default Navbar;