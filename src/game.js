import React from 'react';
import data from './data.json';
import Board from './components/board';

const Game = () => {
    return(
        <section className="c-bingo">
            <Board data={data} />
        </section>
    )

}

export default Game;