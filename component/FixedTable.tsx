import React from 'react';

const FixedTable = () => {
    return (
        <div className="fixed-table">
            <table>
                <thead>
                    <tr>
                        {new Array(10).fill(1).map(el => <th>{el}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {new Array(50).fill(1).map(el =>
                        <tr>
                            {new Array(10).fill(1).map(el => <td>{el}</td>)}
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default FixedTable;