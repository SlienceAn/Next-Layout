import React from 'react';
import { FiChevronsDown } from 'react-icons/fi'
import Link from 'next/link';

const content = [
    {
        parent: 'Home',
        children: []
    },
    {
        parent: 'Profile',
        children: ['demo-1', 'demo-2', 'demo-3']
    }
]

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul className="drop">
                {content.map(el =>
                    <li key={el.parent}>
                        <div>
                            {el.parent}
                            <FiChevronsDown fontSize="1.3rem" />
                        </div>
                        <ul className="drop-content">
                            {el.children.map(el =>
                                <Link key={el} href="/Profile">
                                    <li>{el}</li>
                                </Link>)}
                        </ul>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar;