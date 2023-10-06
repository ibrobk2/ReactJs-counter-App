import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

  render() {
    return (
      <div className="mt-3">
        <img src={this.state.imageUrl} alt="" />
        <span className="badge badge-primary m-2" style={ this.styles }>{this.formatCount()}</span>
        <button className="btn btn-success btn-sm">Increment</button>
      </div>
    );
  }

  formatCount(){
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
