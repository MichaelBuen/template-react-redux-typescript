import { LoggedUserActionType } from './action-type';

export type LoggedUserAction =
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

