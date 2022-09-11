import { createSelector } from '@reduxjs/toolkit';
import { selectTodos } from './slices/common';
import { RootState } from './store';

export const todosSelector = createSelector([selectTodos], todos => ({ todos }));