import { Dispatch, Reducer } from 'redux';
import { ILoggedUserState } from './state';

export enum LoggedUserActionType
{
    LOGGED_USER__SET_USERNAME    = 'LOGGED_USER_SET_USERNAME',
    LOGGED_USER__SET_COLOR_THEME = 'LOGGED_USER__SET_COLOR_THEME',
}

type LoggedUserAction =
    {
        type: LoggedUserActionType.LOGGED_USER__SET_USERNAME;
        username: string;
    }
    |
    {
        type: LoggedUserActionType.LOGGED_USER__SET_COLOR_THEME;
        colorTheme: string;
    }
    ;


export const setLoggedUser = (username: string): LoggedUserAction => ({
    type: LoggedUserActionType.LOGGED_USER__SET_USERNAME,
    username
});

export const setColorTheme = (colorTheme: string): LoggedUserAction => ({
    type: LoggedUserActionType.LOGGED_USER__SET_COLOR_THEME,
    colorTheme
});

interface IUserDto
{
    id: number;
    username: string;
}



export const getLoggedUser = (n: number) => async (dispatch: Dispatch): Promise<void> =>
{
    const userRequest = await fetch(`https://jsonplaceholder.typicode.com/users/${n}`);

    const {status} = userRequest;

    if (!(status === 200 || status === 301)) {
        throw new Error('HTTP Status: ' + status);
    }

    const {username} = await userRequest.json() as IUserDto;

    await dispatch(setLoggedUser(username));

    await dispatch(setColorTheme('blue'));
};




export const loggedUser: Reducer<ILoggedUserState, LoggedUserAction> = (state = {} as any, action) =>
{
    switch (action.type) {
        case LoggedUserActionType.LOGGED_USER__SET_USERNAME:
            return {
                ...state
                , username: action.username
            };
        case LoggedUserActionType.LOGGED_USER__SET_COLOR_THEME:
            return {
                ...state
                , colorTheme: action.colorTheme
            }
    }

    return state;
};
