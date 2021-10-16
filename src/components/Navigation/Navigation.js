import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={`${styles.navList} list`}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={styles.link}
            activeClassName={styles.active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
