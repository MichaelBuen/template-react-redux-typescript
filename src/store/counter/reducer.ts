import { CounterAction } from './action';
import { CounterActionType } from './action-type';

export const counter = (state: number = 0, action: CounterAction) =>
{
    switch(action.type) {
        case CounterActionType.COUNTER__INCREMENT:
            return state + (action.n === undefined ? 1 : action.n);
        case CounterActionType.COUNTER__DECREMENT:
            return state - (action.n === undefined ? 1 : action.n);
        case CounterActionType.COUNTER__RESET:
            return 0;
    }

    return state;
};

