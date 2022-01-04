import React from 'react';

const FixedTable = () => {
    return (
        <div className="fixed-table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        {new Array(30).fill(1).map((el, idx) => <th>{idx + 1}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {new Array(50).fill(1).map((el, idx) =>
                        <tr>
                            <td>{idx + 1}</td>
                            {new Array(30).fill(1).map(el => <td>{el}</td>)}
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default FixedTable;