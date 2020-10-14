import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";
import "./css/Typed.css";

class MyComponent extends Component {
  render() {
    return (
      <div className="typed">
        <Typed
          strings={[
            "Space Exploration Technologies Corp. SpaceX, is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. SpaceX has developed several launch vehicles, the Starlink satellite constellation, the Dragon cargo spacecraft, and flown humans to the International Space Station on the Crew Dragon Demo-2.SpaceX's achievements include the first privately funded liquid-propellant rocket to reach orbit (Falcon 1 in 2008) he first private company to successfully launch, orbit, and recover a spacecraft (Dragon in 2010), the first private company to send a spacecraft to the International Space Station (Dragon in 2012), the first Vertical take-off and vertical propulsive landing for an orbital rocket (Falcon 9 in 2015), the first reuse of an orbital rocket (Falcon 9 in 2017), the first private company to launch an object into orbit around the Sun (Falcon Heavy's payload of a Tesla Roadster in 2018), and the first private company to send astronauts to orbit and to the International Space Station (SpaceX Crew Dragon Demo-2 mission in 2020). SpaceX has flown 20 cargo resupply missions to the International Space Station (ISS) under a partnership with NASA, as well as an uncrewed demonstration flight of the human-rated Dragon 2 spacecraft (Crew Demo-1) on 2 March 2019, and the first crewed Dragon 2 flight on 30 May 2020.",
          ]}
          typeSpeed={30}
        >
          <p></p>
        </Typed>
        <br />
      </div>
    );
  }
}
export default MyComponent;
