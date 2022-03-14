import { useState } from 'react';

const logo = require('../images/logo.jpg');

function Nav() {
   


    return (
        <nav>
            <button id='hamburgermenu'></button>
            <img className='logo' src={logo} alt="Logo" />
        </nav>
    );
}
export default Nav;