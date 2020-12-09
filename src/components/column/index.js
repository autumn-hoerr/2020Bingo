import React from 'react'
import Cell from '../cell';
import './column.sass';

//https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const fiveRandomItems = (itemArray, n=5) => {
    let result = new Array(n),
        len = itemArray.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("fiveRandomItems: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = itemArray[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const Column = ({ colData, freespace, index }) => {
    return(
        <> 
            <div className="c-colHeader">
                <h2 className={`c-colHeader__lead c-colHeader__lead--${index}`}>{colData.heading.charAt(0)}</h2>
                <h3 className={`c-colHeader__subhead`}>{colData.heading}</h3>
            </div>
            { fiveRandomItems(colData.items).map((item, index) => (
                <Cell key={index} item={item} index={index} freespace={freespace && index===2}/>
            ))}
        </>
        );
}

export default Column;