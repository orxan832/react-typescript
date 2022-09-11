import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterState {
    count: number
};

const initialState: CounterState = {
    count: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        decrement: state => {
            state.count -= 1
        }
    }
});

export const { increment, incrementByAmount, decrement } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCount = (state: RootState) => state.counter.count;