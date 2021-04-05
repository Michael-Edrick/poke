import { valueToObjectRepresentation } from '@apollo/client/utilities';
import React, { Component } from 'react';

export class Catch extends Component {

    render(){

        function clickHandler(){
            console.log('Button clicked')
        }

        return (
            <div>
                <button onClick={clickHandler}>Click{this.state.count}</button>
            </div>
        )
    }
}

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            count: parseInt(localStorage.getItem("owned")) + 1
        };
    }

    handleClick = () => {
        
        localStorage.setItem(this.state.nickname, this.props.name)
        localStorage.setItem("owned", this.state.count)
    };

    handleNicknameChange = (event) => {
        this.setState({
            nickname: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.nickname}`)
        event.preventDefault()

    }

    render(){

        const nama = this.props.name;
        const nick = this.state.nickname;

        // function clickHandler(){
        //     console.log('Button clicked')
        //     localStorage.setItem(nick, nama);
        // }

        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nickname</label>
                    <input 
                        type='text' 
                        value={this.state.nickname}
                        onChange={this.handleNicknameChange}
                    />
                </div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}