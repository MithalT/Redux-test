import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
//import { Component } from 'react';
//import {connect } from 'react-redux/es/exports';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  //its a function take state a parametre and return the latest value of state.counter when every change
  const counter = useSelector(state => state.counterReducer.counter);
  const showCounter = useSelector(state => state.counterReducer.showCounter);
  const dispatch = useDispatch();

/*
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });

  }
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  } */

  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());

  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //type:SOME_UNIQUE_IDENTIFIER ,payload:10
  }
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

/*
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();

  }
  toggleCounterHandler() {

  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    increment : () => dispatch({ type: 'increment' }),
    decrement : () => dispatch({ type: 'decrement' })

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/

export default Counter;
