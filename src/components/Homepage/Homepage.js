import React from "react";
import styles from "./Homepage.css";
import Profile from "./ProfileCard/ProfileCard";
import Logo from "../Logo/Logo";
import HorLine from "./HorLine/HorLine";
import TagLine from "./TagLine/TagLine";
import OwnerName from "./OwnerName/OwnerName";
import Cards from "./Cards/Cards";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import OverView from "./OverView/OverView";
import Summary from "./Summary/Summary";
import Keys from "./Table/Keys/keys";
import Values from "./Table/Values/values";
import Footer from './Footer/Footer' ; 

const homepage = (props) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.NavLogo}>
        <Logo />
      </header>

      <article className={styles.TagLine}>
        <TagLine summary={props.summary} add={props.add} />
        <HorLine />
      </article>

      <aside className={styles.Profile}>
        <Profile />
      </aside>
      <aside className={styles.name}>
        <OwnerName />
      </aside>
      <aside className={styles.card1}>
        <Cards name={props.name1} pic={pic1} post="COO" />
      </aside>
      <aside className={styles.card2}>
        <Cards name={props.name2} pic={pic2} post="CTO Propulsion" />
      </aside>
      <aside className={styles.AboutHeading}>
        <OverView />
      </aside>
      <aside className={styles.summary}>
        <Summary summary={props.add} />
      </aside>
      <aside className={styles.keys}>
        <Keys reqData={props.reqData} />
      </aside>
      <aside className={styles.values}>
        <Values reqData={props.reqData} />
      </aside>
      <footer className={styles.foot}>
        <Footer/>
      </footer>
    </div>
  );
};

export default homepage;
