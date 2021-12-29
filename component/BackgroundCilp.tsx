import React from 'react';
import Navbar from './Navbar';
import RotateCube from './RotateCube';

const BackgroundCilp = () => {
    return (
        <div className="Cilp">
            <Navbar />
            <div className="Cilp-content">
                <span className="Cilp-title">
                    <RotateCube/>
                </span>
            </div>
        </div>
    )
}

export default BackgroundCilp;