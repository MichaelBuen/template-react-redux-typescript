import { CounterActionType } from './action-type';

export type CounterAction =
    {
        type: CounterActionType.COUNTER__INCREMENT;
        n?: number;
    }
    |
    {
        type: CounterActionType.COUNTER__DECREMENT;
        n?: number;
    }
    |
    {
        type: CounterActionType.COUNTER__RESET;
    }
    ;


