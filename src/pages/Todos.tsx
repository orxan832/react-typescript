import { useEffect, useMemo, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { todosSelector } from '../redux/reselect';
import { fetchTodos } from '../redux/slices/common';

const Todos = () => {

    const { todos } = useAppSelector(todosSelector);
    const dispatch = useAppDispatch();

    console.log('Todos.tsx is rendering');

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    const renderTodos = useMemo(() => todos?.map(({ id, title }) =>
        <li key={id} className='p-2 border border-gray-200 text-gray-600 rounded'>
            {id}. {title}
        </li>
    ), [todos]);

    return (
        <ul className='flex flex-col pt-2 space-y-2 w-full h-full overflow-auto'>
            {renderTodos}
        </ul>
    )
}

export default memo(Todos);