import React from 'react';
import { SiSass, SiReact, SiRedux, SiTsnode, SiTypescript, SiWebpack } from 'react-icons/si'

const data = [
    {
        name: 'sass',
        icon: <SiSass fontSize="5rem" />
    },
    {
        name: 'React',
        icon: <SiReact fontSize="5rem" />
    },
    {
        name: 'Redux',
        icon: <SiRedux fontSize="5rem" />
    },
    {
        name: 'Tsnode',
        icon: <SiTsnode fontSize="5rem" />
    },
    {
        name: 'Typescript',
        icon: <SiTypescript fontSize="5rem" />
    },
    {
        name: 'webpack',
        icon: <SiWebpack fontSize="5rem" />
    }
]

const ArrowNavbar = () => {
    return (
        <div className="Arrow">
            <div className="Arrow-box">
                {data.map(el =>
                    <div key={el.name} className="Arrow-content">
                        {el.icon}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArrowNavbar;