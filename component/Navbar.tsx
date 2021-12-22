import React from 'react';
import { DiGithubBadge } from 'react-icons/di'
const Navbar = () => {
    return (
        <nav className="Navbar">
            <DiGithubBadge fontSize="3rem" />
            <ul>
                {new Array(5).fill(0).map(el => <li key={el}>{el}</li>)}
            </ul>
        </nav>
    )
}

export default Navbar;