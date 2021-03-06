import { useState } from 'react';
// import Sidebar from './Sidebar';

const logo = require('../images/netflixlogo.png');
const hamburgermenu = require('../images/netflixmenu.png');
const searchIconImg = require("../images/searchicon.png");
const dotsImg = require('../images/three_dots.png');
const accountImg = require('../images/accountImg.jpg');

function Nav() {

    const [showMenu, setShowMenu] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showMeldingen, setShowMeldingen] = useState(false)

    let sidebar;
    let settings;
// voor de meldingen 

if(showMeldingen){
    alert("hallo");
    
}

// voor de settings knop
    if (showSettings) {
        settings = <div id="settingsContainer">
            <div className="options"><a className='options_A' href='/homepage'>Instellingen</a></div>
            <div className="options"><a className='options_A' href='/'>Uitloggen</a></div>
        </div>
    }

// voor de sidebar
    if (showMenu) {
        sidebar = <aside id="SiderBar">
            <div id="sidebarInnerContainerLeft">
                <div id="profielContainer">
                    <div id="profielFoto"></div>
                    <div id="profielNaam">Gavin The Legend</div>
                    <div id="profielSwitch"></div>
                </div>
                <div id="sidebarContent">
                    <div id="meldingen" className="info">
                        <div className="asideInfoContainer">
                            <div className="infoIcon"></div>
                            <p>Meldingen</p>
                        </div>



                        <div onClick={() => setShowMeldingen(!showMeldingen)} className="asideInfoIcon">


                        
                        </div>




                    </div>
                    <div id="downloads" className="info">
                        <div className="asideInfoContainer">
                            <div className="infoIcon"></div>
                            <p>Mijn downloads</p>
                        </div>
                    </div>
                    <ul>
                        <li onClick={() => alert('resr')}>Homepagina</li>
                        <li>Anime</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Homepagina</li>
                        <li>Anime</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Anime</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Homepagina</li>
                        <li>Anime</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Anime</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Homepagina</li>
                        <li>Anime</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                        <li>Drama's</li>
                        <li>Filmhuisfilms</li>
                        <li>Thrillerfilms</li>
                        <li>Horrorfilms</li>
                    </ul>
                </div>
            </div>
            <div onClick={() => setShowMenu(false)} id="sidebarInnerContainerRight">hgfhdsjksalh</div>
        </aside>
    }
    // const setMenu = async (event) => {
    //     setShowMenu(true);
    //     event.stopPropagation();
    // }
    // window.onclick = function () {
    //     if (setShowMenu) {
    //         setShowMenu(false)
    //     }
    // }

    // nav een achtergrond kleur geven wanneer je scrollt
    function changeNavBg() {
        var scrollValue = window.scrollY;
        var navBar = document.getElementById("nav");
        // console.log(scrollValue);
        if (scrollValue > 0) {
            navBar.style = 'background-color:black;'
        } else {
            navBar.style = 'background-color:none'
        }
    }
    window.addEventListener('scroll', changeNavBg);



    return (
        <nav id='nav'>
            <div id="nav-leftContainer">
                <div onClick={() => setShowMenu(!showMenu)} id='hamburgermenu'><img id='menuLogo' src={hamburgermenu} alt="" /></div>
                <div id="logoContainer"><img className='logo' src={logo} alt="Logo" /></div>
            </div>
            <div id="nav-rightContainer">
                <div className='nav-icons' id="nav-searchIcon"><img id='searchIconImg' src={searchIconImg} alt="" /></div>
                <div onClick={() => setShowSettings(!showSettings)} className='nav-icons' id="nav-settingsIcon"><img id='dotsImg' src={dotsImg} alt="" /></div>
            </div>
            {sidebar}
            {settings}
        </nav>

    );
}
export default Nav;