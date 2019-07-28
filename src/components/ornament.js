import React, { Component } from "react";

class Ornament extends Component {
  render() {
    return (
      <>
        {this.props.text}
        <div className="Ornament-img" />
      </>
    );
  }
}

export default Ornament;
