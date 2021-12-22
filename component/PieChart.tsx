import React from 'react';

const PieChart = () => {
    return (
        <div className="pie">
            <div className="pie-content">
                {new Array(6).fill(0).map((el, idx) =>
                    <div className="pie-part">
                        <label className="pie-label">{idx + 1}</label>
                    </div>)
                }
            </div>
        </div >
    )
}
export default PieChart;