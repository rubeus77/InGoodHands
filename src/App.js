import React, { Component } from "react";

import "./App.scss";

class App extends Component {
  state = {
    isSession: false
  }
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        {/*
        <YellowBar/>
        <Steps/> */}
        <About />
        {/* <Fundations/>
        <Contact/> */}
      </React.Fragment>
    );
  }
}

export default App;
