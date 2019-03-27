import { ILoggedUserState } from './logged-user/state';
import { CounterType } from './counter/state';

export interface IAllState
{
    loggedUser: ILoggedUserState;
    counter: CounterType;
}
