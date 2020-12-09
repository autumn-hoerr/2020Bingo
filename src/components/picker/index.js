import React from 'react';

const Picker = ({ clickHandler }) => {
    return(
        <button onClick={() => clickHandler() }>Pick One!</button>
    )
}

export default Picker;