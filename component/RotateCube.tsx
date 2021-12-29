import React from 'react';

const RotateCube = () => {
    return (
        <div className="Rotate">
            <ul>
                {["練","習","與","測","試","用","專","案","並","無","用","途"].map((el, idx) =>
                    <li
                        key={idx}
                        className="Rotate-content"
                        data-text={el}
                    >
                    </li>)}
            </ul>
        </div>
    )
}
export default RotateCube;