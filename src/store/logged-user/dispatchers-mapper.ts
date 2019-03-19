import { LoggedUserAction } from './action';

import { Dispatch } from 'redux';
import { ILoggedUserDispatchers } from './dispatchers';
import { LoggedUserActionType } from './action-type';

interface IUserDto
{
    id: number;
    username: string;
}

export const mapDispatchToProps = (dispatch: Dispatch<LoggedUserAction>): ILoggedUserDispatchers => ({
    getLoggedUser: async (): Promise<void> =>
    {
        const userRequest = await fetch('https://jsonplaceholder.typicode.com/users/1');

        const {status} = userRequest;

        if (!(status === 200 || status === 301)) {
            throw new Error('HTTP Status: ' + status);
        }

        const {username } = await userRequest.json() as IUserDto;

        dispatch({type: LoggedUserActionType.LOGGED_USER__SET_USERNAME, username});
    }
});
