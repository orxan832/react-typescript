import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../../interfaces/todo';
import { RootState, AppThunk } from '../store';

interface CounterState {
    status: 'idle' | 'loading' | 'failed',
    todos: Todo[]
};

const initialState: CounterState = {
    status: 'idle',
    todos: []
};

export const fetchTodos = createAsyncThunk('counter/fetchTodos', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data;
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default counterSlice.reducer;

export const selectTodos = (state: RootState) => state.common.todos.map(({ id, title }) => ({ id, title }));