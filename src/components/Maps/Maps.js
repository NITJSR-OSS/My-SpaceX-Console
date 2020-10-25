import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Maps.css";
import Nav from "../UI/Navigation/Navigation";
import Footer from "../UI/Footer/Footer";
import Heading from "../UI/Heading/Heading";
import MobileMenu from "../UI/Navigation/MobileMenu/MobileMenu";

const arr = [];
arr.push(
  new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
);

arr.push(
  new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
);
arr.push(
  new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
);
arr.push(
  new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
);

class Maps extends Component {
  state = {
    lat: this.props.lat,
    lng: this.props.long,
    name: this.props.name,
    position: [],
    zoom: 4,
  };

  componentDidMount() {
    let upposition = [];
    for (let i = 0; i < this.state.lat.length; i++) {
      upposition.push(
        <Marker
          position={[this.state.lat[i], this.state.lng[i]]}
          icon={arr[Math.floor(Math.random() * arr.length)]}
          key={this.state.name[i]}
        >
          <Popup>{this.state.name[i]}</Popup>
        </Marker>
      );
    }
    this.setState({ position: upposition });
  }

  render() {
    const position1 = [this.state.lat[0], this.state.lng[0]];
    return (
      <div className={styles.mapScreen}>
        <div className={styles.mobileMenu}>
          <MobileMenu />
        </div>
        <Nav />
        <Heading title="Launchpad Locations" />
        <Map className={styles.map} center={position1} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.position}
        </Map>
        <Footer />
      </div>
    );
  }
}

export default Maps;
