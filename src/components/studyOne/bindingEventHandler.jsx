import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //   constructor() {
  //     super(); // Use for active constructor
  //     this.handleIncrement = this.handleIncrement.bind(this); // handle for get class Counter with bind
  //   }
  
  //   handleIncrement() {
  //     console.log("Increment Clicked!", this);
  //   };

  handleIncrement = () => { 
    console.log("Increment Clicked!", this);
  }; // Use that simple and clean code but we know problem handling Event this = undefined

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
