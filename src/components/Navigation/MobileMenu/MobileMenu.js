import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai"; 
import { Link } from "react-router-dom";
import { MobileMenuData } from "./MobileMenuData";
import styles from "./MobileMenu.css";
import { IconContext } from "react-icons";

function MobileMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let navmenu = [];

  navmenu.push(styles.navMenu);
  navmenu.push(styles.active);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={styles.navbar}>
          <Link to="#" className={styles.menuBars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? navmenu.join("") : navmenu[0]}>
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            {MobileMenuData.map((item, index) => {
              return (
                <li key={index} className={styles.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={styles.items}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default MobileMenu;
