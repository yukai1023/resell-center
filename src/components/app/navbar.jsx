import React from 'react';
import styles from './navbar.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCreditCard, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link>
            <FontAwesomeIcon icon={faHouse}/>
            <span className={styles.text}>首頁</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link>
            <FontAwesomeIcon icon={faCreditCard}/>
            <span className={styles.text}>卡片管理</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link>
            <FontAwesomeIcon icon={faFileInvoice}/>
            <span className={styles.text}>帳務管理</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar 