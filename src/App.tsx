import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { hot } from 'react-hot-loader/root';


interface IComponentState
{
    message: string;
    counter: number;
}

class App extends Component<object, IComponentState>
{
    constructor(props: {})
    {
        super(props);

        this.state = {
            message: 'hello world',
            counter: 0,
        };
    }

    increment = () => this.setState({counter: this.state.counter + 1});

    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>

                    <p>{this.state.message}</p>
                    <button onClick={this.increment}>Increment {this.state.counter}</button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default hot(App);
