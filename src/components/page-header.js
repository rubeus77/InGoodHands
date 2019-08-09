import React, { Component } from "react";
//import LogIn from "./log-in";
//import Menu from "./menu";
import Ornament from "./ornament";
import { HashRouter as Router, Link } from 'react-router-dom';

class PageHeader extends Component {
  render() {
    return (
      <header className="PageHeader">
        <div className="header-info">
          <Ornament
            text={
              <React.Fragment>
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
              </React.Fragment>
            }
          />
          <Router>
          <div className="header-buttons">
            <button><Link to="/login"><p>Oddaj</p><p>rzeczy</p></Link></button>
            <button><Link to="/login"><p>Zorganizuj</p><p>zbiórkę</p></Link></button>
          </div>
          </Router>
        </div>
      </header>
    );
  }
}

export default PageHeader;
