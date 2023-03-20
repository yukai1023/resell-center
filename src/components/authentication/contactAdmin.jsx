import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './contactAdmin.module.scss';
import emailImg from "../../assets/email.png"

const ContactAdmin = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactAdmin}>
      <h1>Customer Portal</h1>
      <img alt='email' src={emailImg}/>
      <p>{t('authentication:contactAdmin.contactAdmin')}</p>
      <p>customerportal@cacafly.com</p>
      <Link id="link" to={'/login'}>
        <button type="submit" className={styles.returnButton} >
          <span className={styles.button__text}>{t('authentication:contactAdmin.return')}</span>
        </button>
      </Link>
    </div>
  );
}
export default ContactAdmin 