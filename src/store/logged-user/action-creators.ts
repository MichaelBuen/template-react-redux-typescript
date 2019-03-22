import { LoggedUserAction } from './action';
import { LoggedUserActionType } from './action-type';
import { Dispatch } from 'redux';


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



export const getLoggedUser = () => async (dispatch: Dispatch): Promise<void> =>
{
    const userRequest = await fetch('https://jsonplaceholder.typicode.com/users/1');

    const {status} = userRequest;

    if (!(status === 200 || status === 301)) {
        throw new Error('HTTP Status: ' + status);
    }

    const {username} = await userRequest.json() as IUserDto;

    await dispatch(setLoggedUser(username));

    await dispatch(setColorTheme('blue'));


    // this.props.setLoggedUser(username);
    //
    // this.props.setColorTheme('blue');
};