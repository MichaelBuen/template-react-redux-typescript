import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { hot } from 'react-hot-loader/root';

import { connect } from 'react-redux';

import { mapStateToProps } from './store/logged-user/state-mapper';
import { mapDispatchToProps } from './store/logged-user/dispatchers-mapper';

import { ILoggedUserDispatchers } from './store/logged-user/dispatchers';
import { ILoggedUserState } from './store/logged-user/state';


interface IComponentState
{
    message: string;
    counter: number;
}

type ComponentProps = ILoggedUserDispatchers & ILoggedUserState;

class App extends Component<ComponentProps, IComponentState>
{
    constructor(props: ComponentProps)
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

                    <button onClick={() => this.props.getLoggedUser()}>Get logged user</button>
                    <div>{this.props.username}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(hot(App));


