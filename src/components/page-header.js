import React, { Component } from "react";
import LogIn from "./log-in";
import Menu from "./menu";
import Ornament from "./ornament";

class PageHeader extends Component {
  render() {
    return (
      <header>
        <LogIn log={this.props.log}/>
        <Menu />
        <Ornament
          text={
            <>
              <h1>Zacznij pomagać!</h1>
              <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            </>
          }
        />
        <button>Oddaj rzeczy</button>
        <button> Zorganizuj zbiórkę</button>
      </header>
    );
  }
}

export default PageHeader;
