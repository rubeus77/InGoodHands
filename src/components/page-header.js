import React, { Component } from "react";
//import LogIn from "./log-in";
//import Menu from "./menu";
import Ornament from "./ornament";

class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className="header-info">
          <Ornament
            text={
              <React.Fragment>
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
              </React.Fragment>
            }
          />
          <div className="header-buttons">
            <button><p>Oddaj</p><p>rzeczy</p></button>
            <button><p>Zorganizuj</p><p>zbiórkę</p></button>
          </div>
        </div>
      </header>
    );
  }
}

export default PageHeader;
