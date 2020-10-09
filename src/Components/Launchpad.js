import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../Components/css/Launchpad.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Launchpad() {
  return (
    <div className="map">
      <Sidenav />
      <Navbar />
      <Map center={[0, 0]} zoom={12}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default Launchpad;

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <Map center={position} zoom={this.state.zoom}>

//       </Map>
//     );
//   }
// }
