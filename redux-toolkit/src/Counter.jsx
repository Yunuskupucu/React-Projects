import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counter/counterSlice';

// useSelector -> state içindeki veriyi almak için kullanılır.
// useDispatch -> action göndermek için kullanılır.

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
