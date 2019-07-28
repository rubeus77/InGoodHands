import React, { Component } from "react";
import Ornament from "./ornament";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-left">
          <Ornament text={<h2>O nas</h2>} />
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <div className="About-sign" />
        </div>
        <div className="About-img" />
      </div>
    );
  }
}

export default About;
