import React from 'react';

const PerspectiveCube = () => {
    return (
        <div className="Cube">
            <div className="Cube-tab">
                <label htmlFor="tab-top">Top</label>
                <label htmlFor="tab-front">Front</label>
                <label htmlFor="tab-bottom">Bottom</label>
            </div>
            <div className="Cube-box">
                <div className="Cube-content">
                    <h1>React</h1>
                    <p>A</p>
                </div>
                <div className="Cube-content">
                    <h1>Redux</h1>
                    <p>A</p>
                </div>
                <div className="Cube-content">
                    <h1>Nodejs</h1>
                    <p>C</p>
                </div>
            </div>
            <input type="radio" name="tabs" id="tab-top" />
            <input type="radio" name="tabs" id="tab-front" />
            <input type="radio" name="tabs" id="tab-bottom" />
        </div>
    )
}

export default PerspectiveCube;