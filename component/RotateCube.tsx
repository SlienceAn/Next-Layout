import React from 'react';

const RotateCube = () => {
    return (
        <div className="Rotate">
            <ul>
                {new Array(9).fill(1).map((el, idx) =>
                    <li
                        key={idx}
                        className="Rotate-content"
                        data-text={idx + 1}
                    >
                    </li>)}
            </ul>
        </div>
    )
}
export default RotateCube;