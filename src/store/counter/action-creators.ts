import { CounterAction } from './action';
import { CounterActionType } from './action-type';

export const incrementCounter = (n?: number): CounterAction => ({
    type: CounterActionType.COUNTER__INCREMENT,
    n
});


export const decrementCounter = (n?: number): CounterAction => ({
    type: CounterActionType.COUNTER__DECREMENT,
    n
});


export const resetCounter = (): CounterAction => ({
    type: CounterActionType.COUNTER__RESET
});

