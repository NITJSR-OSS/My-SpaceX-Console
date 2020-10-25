import React from "react";
import styles from "./LaunchDetails.css";
import thumbnail from "../../../assets/thumbnail1.jpg";
import Heading from "../../UI/Heading/Heading";
import Cards from "../../Homepage/Cards/Cards";
import MissionDetails from "./MissionData/MissionData";
import Cores from "./Cores/Cores";
import Links from "./Links/Links";
import Nav from "../../UI/Navigation/Navigation";
import MobileMenu from "../../UI/Navigation/MobileMenu/MobileMenu";
import Footer from "../../UI/Footer/Footer";

const LaunchDetails = (props) => {
  let data = props.data;
  let image = data.links.patch.small;
  let name = data.name;
  if (image == null) {
    image = thumbnail;
  }
  return (
    <div className={styles.launchDetails}>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
      <Nav />
      <div className={styles.image}>
        <Cards pic={image} name={name} />
      </div>
      <div className={styles.rocket}>
        <Heading title="Mission Details" />
        <MissionDetails props={data} />
      </div>
      <Heading title="Cores" />
      <Cores data={data} />
      <Heading title="Links" />
      <Links data={data} />
      <Footer />
    </div>
  );
};

export default LaunchDetails;
