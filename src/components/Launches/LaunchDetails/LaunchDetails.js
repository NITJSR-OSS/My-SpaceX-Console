import React from "react";
import styles from "./LaunchDetails.css";
import Nav from "../../Navigation/Navigation";
import thumbnail from "../../../assets/thumbnail1.jpg";
import Heading from "../UpcomingLaunches/UpcomingLaunchesHeading/UpcomingLaunchesHeading";
import Cards from "../../Homepage/Cards/Cards";
import MissionDetails from "./MissionData/MissionData";
import Cores from './Cores/Cores' ; 
import Links from './Links/Links'; 
import Footer from '../../Homepage/Footer/Footer';
import MobileMenu from '../../Navigation/MobileMenu/MobileMenu' ; 

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
          <MobileMenu/>
        </div>
      <Nav />
      <div className={styles.image}>
        <Cards pic={image} name={name} />
      </div>
      <div className={styles.rocket}>
        <Heading title="Mission Details" />
        <MissionDetails props={data} />
      </div>
      <Heading  title="Cores" />
      <Cores data={data}/>
      <Heading  title="Links" />
      <Links data={data}/>
      <Footer/>
    </div>
  );
};

export default LaunchDetails;
