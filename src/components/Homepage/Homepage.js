import React from "react";
import styles from "./Homepage.css";
import Profile from "./ProfileCard/ProfileCard";
import HorLine from "./HorLine/HorLine";
import TagLine from "./TagLine/TagLine";
import OwnerName from "./OwnerName/OwnerName";
import Cards from "./Cards/Cards";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import OverView from "./OverView/OverView";
import Summary from "./Summary/Summary";
import Keys from "./Table/Keys/keys";
import Footer from '../UI/Footer/Footer';
import Nav from "../UI/Navigation/Navigation";
import MobileMenu from "../UI/Navigation/MobileMenu/MobileMenu";

const homepage = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
      <header className={styles.NavLogo}>
        <Nav />
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

      <footer className={styles.foot}>
        <Footer />
      </footer>
    </div>
  );
};

export default homepage;
