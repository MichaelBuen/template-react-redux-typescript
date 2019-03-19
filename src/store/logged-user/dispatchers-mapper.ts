import { LoggedUserAction } from './action';

import { Dispatch } from 'redux';
import { ILoggedUserDispatchers } from './dispatchers';
import { LoggedUserActionType } from './action-type';

export const mapDispatchToProps = (dispatch: Dispatch<LoggedUserAction>): ILoggedUserDispatchers => ({
    getLoggedUser: async (): Promise<void> =>
    {
        await dispatch({type: LoggedUserActionType.LOGGED_USER__SET_USERNAME, username: 'Kel'});
    }
});
