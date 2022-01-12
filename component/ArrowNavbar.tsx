import React from 'react';
import { SiSass, SiReact, SiRedux, SiTsnode, SiTypescript, SiWebpack } from 'react-icons/si'

const data = [
    {
        name: 'sass',
        icon: <SiSass />
    },  
    {
        name: 'React',
        icon: <SiReact />
    },
    {
        name: 'Redux',
        icon: <SiRedux />
    },
    {
        name: 'Tsnode',
        icon: <SiTsnode />
    },
    {
        name: 'Typescript',
        icon: <SiTypescript />
    },
    {
        name: 'webpack',
        icon: <SiWebpack />
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