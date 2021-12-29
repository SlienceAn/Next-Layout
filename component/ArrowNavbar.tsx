import React from 'react';

const ArrowNavbar = () => {
    return (
        <div className="Arrow">
            <div className="Arrow-box">
                {new Array(6).fill(1).map(el =>
                    <div className="Arrow-content">React</div>
                )}
            </div>
        </div>
    )
}

export default ArrowNavbar;