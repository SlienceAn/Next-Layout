import React from 'react';

const PerspectiveCube = () => {
    return (
        <div className="Cube">
            <div className="Cube-tab">
                <label htmlFor="tab-top">第一張</label>
                <label htmlFor="tab-front">第二張</label>
                <label htmlFor="tab-bottom">第三張</label>
            </div>
            <input type="radio" name="tabs" id="tab-top" />
            <input type="radio" name="tabs" id="tab-front" />
            <input type="radio" name="tabs" id="tab-bottom" />
            <div className="Cube-box">
                <div className="Cube-content">
                    <span>Frist</span>
                </div>
                <div className="Cube-content">
                    <span>Second</span>
                </div>
                <div className="Cube-content">
                    <span>Third</span>
                </div>
            </div>
        </div>
    )
}

export default PerspectiveCube;