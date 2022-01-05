import React from 'react';

const PieChart = () => {
    return (
        <div className="pie">
            <div className="pie-content">
                {["圓", "餅", "圖", "css", "手", "刻"].map((el) =>
                    <div className="pie-part" key={el}>
                        <label className="pie-label">{el}</label>
                    </div>)
                }
            </div>
        </div >
    )
}
export default PieChart;