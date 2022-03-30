import { useState } from 'react';
import Sidebar from './Sidebar';

const logo = require('../images/logo.jpg');

function Nav() {

    const [showMenu, setShowMenu] = useState(false)
    let sidebar
    if (showMenu) {
        sidebar = <aside id="SiderBar">
            <div id="sidebarInnerContainerLeft">
                <div id="profielContainer">
                    <div id="profielFoto"></div>
                    <div id="profielNaam">Gavin The Legend</div>
                    <div id="profielSwitch"></div>
                </div>
                <div id="sidebarContent">
                    <div id="meldingen" className="info"></div>
                    <div id="downloads" className="info"></div>
                    <ul>
                        <li>Homepagina</li>
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
    return (
        <nav>
            <button onClick={() => setShowMenu(!showMenu)} id='hamburgermenu'></button>
            <img className='logo' src={logo} alt="Logo" />
            {sidebar}
        </nav>

    );
}
export default Nav;