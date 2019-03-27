import { Reducer } from 'redux';

enum CounterActionType
{
    COUNTER__INCREMENT = 'COUNTER__INCREMENT',
    COUNTER__DECREMENT = 'COUNTER__DECREMENT',
    COUNTER__RESET     = 'COUNTER__RESET',
}

type CounterAction =
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


export const counter: Reducer<number, CounterAction> = (state = 0, action) =>
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

