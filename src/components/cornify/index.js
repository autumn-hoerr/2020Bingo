import React from 'react';

const Cornify = () => {
    let currentTime = new Date();
    let submitTime = currentTime.getTime()
    return(
        <img className="c-cell__marker" src={`http://www.cornify.com/getacorn.php?r=${submitTime}&url=${document.location.href}`} alt="this box is checked (with an amazing unicorn sticker)" />
    );
}

export default Cornify;