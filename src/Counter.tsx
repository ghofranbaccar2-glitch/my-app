import React, { Component } from 'react';

// Step 1: Define Props interface
// This component does not receive any props, but we define it for clarity
interface CounterProps {}

// Step 2: Define State interface
// State has a single property 'count' which is a number
interface CounterState {
  count: number;
}

// Step 3: Define the Counter class component
// We pass the props and state interfaces as generics to Component
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Initialize state with count = 0
  state: CounterState = {
    count: 0
  };

  // Step 5: Define increment method to update the count
  // Using arrow function to bind 'this' automatically
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Render method to display the UI
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p> {/* Display current count */}
        <button onClick={this.increment}>Increment</button> {/* Increment button */}
      </div>
    );
  }
}

// Step 7: Export the component
export default Counter;
