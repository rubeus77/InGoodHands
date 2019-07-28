import React, { Component } from "react";
import PageHeader from "./components/page-header";
//import YellowBar from "./components/yellow-bar";
//import Steps from "./components/steps";
import About from "./components/about";
//import Fundations from "./components/fundations-list";
//import Contact from "./components/contact";
// import * as Scroll from 'react-scroll';
// import {
//   HashRouter,
//   Route,
//   Link,
//   Switch,
//   NavLink,
// } from 'react-router-dom';

import "./App.scss";

class App extends Component {
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
