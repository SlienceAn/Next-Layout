import React from 'react';

const Timeline = () => {
    return (
        <div className="timeline">
            {new Array(6).fill(0).map((el, idx) =>
                <div className="timeline-container">
                    <h2 className="timeline-time">2021-12-0{idx + 1}</h2>
                    <div className="timeline-content">
                        <h2>{idx + 1}.主標題</h2>
                        <p>內文</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Timeline;