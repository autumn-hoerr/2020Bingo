import React from 'react';
import Cornify from '../cornify';
import './cell.sass';

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            checked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState, props) => {
            if(!props.freespace){
                return {
                    checked: !prevState.checked
                }
            }
        });
    }

    render(){
        return(
            <div onClick={this.handleClick} 
                 className={`c-colItem c-colItem--${this.props.index} ${this.state.checked ? 'is-checked' : ''} ${this.props.freespace ? 'is-freespace': ''}`}>
                <h3>{this.props.freespace ? "Free Space" : this.props.item}</h3>
                { this.state.checked ? <Cornify /> : "" }
            </div>
        )
    }
}

export default Cell;