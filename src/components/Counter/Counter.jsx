import { useState } from 'react';
import '../Counter/Counter.scss'



const Counter = (props) => {

  const [count, setCount] = useState(props.initialValue)
  const increment = () => {
    setCount(prevState => ++prevState)
  };

  const decrement = () => {
    setCount(prevCount => --prevCount);
  };

  const reset = () => {
    setCount(props.initialValue);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )


}


export default Counter