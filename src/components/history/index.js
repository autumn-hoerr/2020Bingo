import React from 'react';

const History = ({ history }) => {
    return(
        <div>
            <h2>Pick history will appear here (most recent first)</h2>
            <ol reversed>
            { history.slice(0).reverse().map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ol>
        </div>
    )
}

export default History;