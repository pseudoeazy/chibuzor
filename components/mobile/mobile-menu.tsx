import { useState } from "react";
import Link from "next/link";
import menus from "@/constants/menus";
import styles from "./mobile-menu.module.scss";

const MobileMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked((checked) => !checked);
  }
  return (
    <div
      className={`block lg:hidden bg-zinc-950 dark:bg-white ${
        styles.navigation
      } ${isChecked && " background__menu"} `}
    >
      <div className="flex justify-between items-center text-white ">
        <Link href="/">
          {" "}
          <strong>Chibuz</strong>
        </Link>
        <div>
          <input
            type="checkbox"
            className={`${styles.navigation__checkbox}`}
            id="nav-toggle"
            checked={isChecked}
            onChange={handleChange}
          />
          <label
            htmlFor="nav-toggle"
            className={`${styles.navigation__button}`}
          >
            <span className={`${styles.navigation__icon}`}>&nbsp;</span>
          </label>
        </div>
      </div>
      <nav
        className={`${isChecked ? "menu__show" : "menu__hide"} ${
          styles.navigation__nav
        }`}
      >
        {isChecked && (
          <ul className={`${styles.navigation__list}`}>
            {menus.map((menu, idx) => (
              <li key={idx} className={`${styles.navigation__item}`}>
                <Link
                  href={`${menu.path}`}
                  className={`${styles.navigation__link}`}
                >
                  <span>{menu.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
