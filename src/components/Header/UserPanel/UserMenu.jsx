import React, { useState } from "react";
import styles from "./UserMenu.module.sass";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  const [showActive, setShowActive] = useState(false);

  const userToggle = () => {
    return setShowActive(!showActive);
  };

  return (
    <>
      <div className={styles.vscaccount} onClick={userToggle}>
        <VscAccount title="Login In" />

        {showActive && (
          <div className={styles.menu}>
            <div className={styles.blur}>
              <ul className={styles.menucontent}>
                <li>
                  <NavLink to="front-website/singin">Sing In</NavLink>
                </li>
                <li>
                  <NavLink to="front-website/singup">Sing Up</NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;