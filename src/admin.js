import React from 'react';
import Picker from './components/picker';
import History from './components/history';
import data from './data.json';

const dataObjs = ["b", "i", "n", "g", "o"]

class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            history: [],
        }
        this.pickRandom = this.pickRandom.bind(this);
        this.pickUnique = this.pickUnique.bind(this);
    }

    dupeCount = 0;

    pickRandom(){
        //pick a random column
        let column = dataObjs[Math.floor(Math.random() * dataObjs.length)];
        //pick a random item from that column
        let item = data[column].items[Math.floor(Math.random() * data[column].items.length)];
        return { "col" : column,
                 "item" : item }
    }

    formatItemForHistory(itemObj){
        return `${itemObj.col} -- ${itemObj.item}`
    }

    pickUnique(){
        let attempt = this.pickRandom();
        if(this.dupeCount > 100) {
            attempt = {
                "col" : "DONE",
                "item" : "Pretty sure we're out of items at this point. I really hope someone won."
            }
        };
        if (this.state.history.includes(this.formatItemForHistory(attempt)) && attempt.col !== "DONE"){
            console.log("duplicate pick")
            this.dupeCount += 1;
            this.pickUnique();
        } else {
            if(attempt.col !== "DONE"){
                this.dupeCount = 0;
            }
            this.setState((state, props) => {
                console.log(`${attempt.col} -- ${attempt.item}`)
                return {
                    history: [...state.history, this.formatItemForHistory(attempt)]
                }
            });
        }

    }

    render(){
        return(
            <section>
                <h1>Have a great game!</h1>
                <Picker clickHandler={this.pickUnique} />
                <History history={this.state.history}/>
            </section>
        )
    }
}

export default Admin;