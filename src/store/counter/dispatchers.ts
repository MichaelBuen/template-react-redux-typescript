import { decrementCounter, incrementCounter, resetCounter } from './action-creators';

export interface ICounterDispatchers
{
    incrementCounter: typeof incrementCounter,
    decrementCounter: typeof decrementCounter,
    resetCounter: typeof resetCounter;
}