import { LoggedUserAction } from './action';
import { LoggedUserActionType } from './action-type';


export const setLoggedUser = (username: string): LoggedUserAction => ({
    type: LoggedUserActionType.LOGGED_USER__SET_USERNAME,
    username
});

export const setColorTheme = (colorTheme: string): LoggedUserAction => ({
    type: LoggedUserActionType.LOGGED_USER__SET_COLOR_THEME,
    colorTheme
});

