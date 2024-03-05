import { Component } from 'react';
import '../Counter/Counter.scss'



class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: this.props.initialValue
          };
    }
    increment = () => {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));
      };
    
    decrement = () => {
        this.setState(prevState => ({
          count: prevState.count - 1
        }));
      };  
    
    reset = () => {
        this.setState({
          count: this.props.initialValue
        });
      }; 

    render() {
        return (
            <div>
              <h2>Counter: {this.state.count}</h2>
              <button onClick={this.decrement}>-</button>
              <button onClick={this.increment}>+</button>
              <button onClick={this.reset}>Reset</button>
            </div>
          );
    }
}


export default Counter