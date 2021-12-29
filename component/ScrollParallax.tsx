import React from 'react';
import PerspectiveCube from './PerspectiveCube';
import TextEffect from './TextEffect';

const ScrollParallax = () => {
    return (
        <div className="scroll-parallax">
            <div className="scroll-parallax-content">
                <div className="left">
                    <PerspectiveCube />
                </div>
                <div className="right">
                    <TextEffect />
                </div>
            </div>
        </div>
    );
};

export default ScrollParallax;