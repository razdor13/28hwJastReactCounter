import { useDispatch, useSelector } from 'react-redux';
import '../Counter/Counter.scss';

import { increment, decrement, reset ,selectCount} from '../../redux/slices/counterSlice.js';
console.log(selectCount)
const Counter = (props) => {
  const dispatch = useDispatch();
  const qwexqwexqwe = useSelector(selectCount)
  
  const incrementCounter = () => {
    dispatch(increment()); // Increase count by 1
  };

  const decrementCounter = () => {
    dispatch(decrement()); // Decrease count by 1
  };

  const resetCounter = () => {
    dispatch(reset()); // Reset to initial value
  };

  return (
    <div>
      <h2>Counter: {qwexqwexqwe}</h2>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;