import React from 'react';
import styles from './header.module.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.left}>
        <span className={styles.name}>Customer Portal</span>
      </div>
      <div className={styles.right}>
        <button className={styles.profile}>
          <span className={styles.name}>Kevin@tenmax.io</span>
        </button>
      </div>
    </header>
  )
}
export default Header 