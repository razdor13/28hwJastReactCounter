import { useDispatch, useSelector,  } from 'react-redux';
import '../Counter/Counter.scss';
import updateCount from '../../actions/updateCount.js';

const Counter = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const init = useSelector((state)=> state.initialCount)
  const increment = () => {
    dispatch(updateCount(count + 1)); // Increase count by 1
  };

  const decrement = () => {
    console.log(props)
    dispatch(updateCount(count - 1)); // Decrease count by 1
  };

  const reset = () => {
    dispatch(updateCount(init)); // Reset to initial value
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;