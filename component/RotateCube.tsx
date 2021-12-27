import React from 'react';

const RotateCube = () => {
    return (
        <div className="Rotate">
            <ul className="Rotate-box">
                {new Array(9).fill(1).map((el, idx) => <li key={idx}>{idx}</li>)}
            </ul>
        </div>
    )
}
export default RotateCube;