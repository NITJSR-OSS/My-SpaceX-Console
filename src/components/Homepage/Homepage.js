import React from "react";
import styles from "./Homepage.css";
import Profile from "./ProfileCard/ProfileCard";
import Logo from "../Logo/Logo";
import HorLine from './HorLine/HorLine' ; 
import TagLine from './TagLine/TagLine' ; 
import OwnerName from "./OwnerName/OwnerName";
 

const homepage = (props) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.NavLogo}>
          <Logo/>
      </header>

      <article className={styles.TagLine}>
           <TagLine summary={props.summary} add={props.add}/>
           <HorLine/>
      </article>

      <aside className={styles.Profile}>
        <Profile />
      </aside>
      <aside className={styles.name}>
        <OwnerName/>
      </aside>
    </div>
  );
};

export default homepage;
