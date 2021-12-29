import React from 'react';
const Timeline = () => {
    return (
        <div className="timeline">
            {new Array(3).fill(0).map((el, idx) =>
                <div className="timeline-container">
                    <h2 className="timeline-time">2021-12-0{idx + 1}</h2>
                    <div className="timeline-content">
                        {/* <TextLayout /> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Timeline;