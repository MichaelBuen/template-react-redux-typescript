import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { hot } from 'react-hot-loader/root';

import { connect } from 'react-redux';

import { ILoggedUserState } from './store/logged-user/state';

import { ILoggedUserDispatchers } from './store/logged-user/dispatchers';

import { setColorTheme, setLoggedUser } from './store/logged-user/action-creators';
import { IAllState } from './store/all-state';
import { incrementCounter } from './store/counter/action-creators';
import { ICounterDispatchers } from './store/counter/dispatchers';

interface IComponentState
{
    message: string;
    counter: number;
}

interface IUserDto
{
    id: number;
    username: string;
}


interface IPropsToUse
{
    username: ILoggedUserState['username'];
    colorTheme: ILoggedUserState['colorTheme'];
    counter: number;
}


// interface IPropsToUse
// {
//     username: ILoggedUserState['username'];
//     colorTheme: ILoggedUserState['colorTheme'];
//     counter: number;
// }

type Props = IPropsToUse & ILoggedUserDispatchers & ICounterDispatchers;


class App extends Component<Props, IComponentState>
{
    constructor(props: Props)
    {
        super(props);

        this.state = {
            message: 'hello world',
            counter: 0,
        };
    }

    increment = (n: number) => this.props.incrementCounter(n);


    getLoggedUser = async () =>
    {
        const userRequest = await fetch('https://jsonplaceholder.typicode.com/users/1');

        const {status} = userRequest;

        if (!(status === 200 || status === 301)) {
            throw new Error('HTTP Status: ' + status);
        }

        const {username} = await userRequest.json() as IUserDto;

        this.props.setLoggedUser(username);

        this.props.setColorTheme('blue');
    };

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

                    <button onClick={this.getLoggedUser}>Get logged user</button>
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


export const mapStateToProps =
                 ({
                      loggedUser: {username, colorTheme},
                      counter
                  }: IAllState): IPropsToUse => ({
                     username,
                     colorTheme,
                     counter,
                 });

const actionCreators = {
    setLoggedUser, setColorTheme, incrementCounter
};

export default connect(mapStateToProps, actionCreators)(hot(App));


