import React, { Component } from 'react';
import "./TodoList.css";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValues: {
                name: '',
                surname: '',
                age: 0,
                gender: '',
                race: '',
                email: 'Matthew@gmail.com',
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput({ target: { value } }, key) {
        this.setState({ inputValues: { ...this.state.inputValues, [key]: value } });
        console.log(this.handleInput)
    }

    // handleClick() {

    // }

    render() {
        console.log('state', this.state.inputValues);
        return (
            <div className="todoListMain">
                <div>
                    <input placeholder="Name" value={this.state.name} onChange={(event) => this.handleInput(event, 'name')} /><br />
                    <input placeholder="Surname" value={this.state.surname} onChange={(event) => this.handleInput(event, 'surname')} /><br />
                    <input placeholder="Age" value={this.state.age} onChange={(event) => this.handleInput(event, 'age')} /><br />
                    <input placeholder="Gender" value={this.state.gender} onChange={(event) => this.handleInput(event, 'gender')} /><br />
                    <input placeholder="Race" value={this.state.race} onChange={(event) => this.handleInput(event, 'race')} /><br />
                    <input placeholder="Email" type="email" value={this.state.email} onChange={(event) => this.handleInput(event, 'email')} /><br />

                    <button onClick={this.handleClick}>Click</button>
                </div>
            </div>
        );
    }
}

export default TodoList;