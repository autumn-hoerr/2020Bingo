import React from 'react';
import Column from '../column';
import './board.sass'

const keys = ["b", "i", "n", "g", "o"]
const Board = ({ data }) => {
    return(
        <div className="c-board">
            {keys.map((item, index) => (
                <Column key={index} colData={data[item]} index={index} freespace={index==2}/>
            ))}
        </div>
    )
}

export default Board;