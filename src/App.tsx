import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { hot } from 'react-hot-loader/root';

import { connect } from 'react-redux';

import { ILoggedUserState } from './store/logged-user/state';

import { IAllState } from './store/all-state';

import { incrementCounter } from './store/counter/actions+reducers';
import { getLoggedUser, setColorTheme, setLoggedUser } from './store/logged-user/actions+reducers';

interface IComponentState
{
    message: string;
    counter: number;
}


function delay(ms: number) {
    return new Promise<void>(function(resolve) {
        setTimeout(resolve, ms);
    });
}

interface IPropsToUse
{
    username: ILoggedUserState['username'];
    colorTheme: ILoggedUserState['colorTheme'];
    counter: number;
}

const actionCreators = {
    setLoggedUser, setColorTheme,
    incrementCounter,
    getLoggedUser,
};

export const mapStateToProps =
                 ({
                      loggedUser: {username, colorTheme},
                      counter
                  }: IAllState): IPropsToUse => ({
                     username,
                     colorTheme,
                     counter,
                 });

type Props = IPropsToUse & typeof actionCreators;


class App extends Component<Props, IComponentState>
{
    constructor(props: Props)
    {
        super(props);

        this.state = {
            message: 'hello world',
            counter: 0,
        };

        this.blah = this.blah.bind(this);
    }

    increment = (n: number) => this.props.incrementCounter(n);

    async blah(): Promise<void> {
        await this.props.getLoggedUser(2);

        await this.props.incrementCounter(100);
    }

    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload. Hello
                    </p>

                    <p>{this.state.message}</p>

                    <button onClick={() => this.increment(5)}>Increment {this.props.counter}</button>

                    <button onClick={this.blah}>Get logged user</button>
                    <div>{this.props.username}</div>

                    <div style={{color: this.props.colorTheme}}>{this.props.colorTheme}</div>

                    <a

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

export default connect(mapStateToProps, actionCreators)((hot as any)(App));


