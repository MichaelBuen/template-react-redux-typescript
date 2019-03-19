import { ILoggedUserState } from './state';
import { LoggedUserAction } from './action';
import { LoggedUserActionType } from './action-type';

export const loggedUserReducer = (state: ILoggedUserState = {} as any, action: LoggedUserAction) =>
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
