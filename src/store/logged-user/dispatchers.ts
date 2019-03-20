import { setColorTheme, setLoggedUser } from './action-creators';

export interface ILoggedUserDispatchers
{
    setLoggedUser: typeof setLoggedUser;
    setColorTheme: typeof setColorTheme;
}
