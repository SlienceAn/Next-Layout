import React from 'react';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul>
                {['Home', 'About', 'Profile', 'Connet'].map(el => <li key={el}>{el}</li>)}
            </ul>
        </nav>
    )
}

export default Navbar;