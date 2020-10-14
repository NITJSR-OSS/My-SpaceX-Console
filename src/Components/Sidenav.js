import React from "react";
import Sidebar from "react-sidebar";
import "./css/Sidenav.css";
import { Link } from "react-router-dom";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        className="sidebar"
        sidebar={
          <ul className="side-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/launches">
              <li>Launches</li>
            </Link>
            <Link to="/launchdetail">
              <li>Launch Details</li>
            </Link>
            <Link to="/launchpad">
              <li>LaunchPad</li>
            </Link>
          </ul>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "black", width: "50%" } }}
      >
        <div onClick={() => this.onSetSidebarOpen(true)} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </Sidebar>
    );
  }
}

export default Sidenav;
