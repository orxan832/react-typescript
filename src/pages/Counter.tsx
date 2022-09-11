import { memo } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decrement, increment } from "../redux/slices/counter";

const Counter = () => {

    const { count } = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();

    console.log('Counter.tsx is rendering');

    return (
        <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
            <input readOnly className='p-2 border border-gray-300 rounded text-center outline-none w-1/4' value={count} />
            <button className='p-2 rounded bg-gray-200 hover:bg-gray-300 duration-500 text-gray-700 w-1/4' onClick={() => dispatch(increment())}>Increment</button>
            <button className='p-2 rounded bg-gray-200 hover:bg-gray-300 duration-500 text-gray-700 w-1/4' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default memo(Counter);