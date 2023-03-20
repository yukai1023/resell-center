import React from 'react';
import styles from './Authentication.module.scss';
import LoginForm from '../components/authentication/loginForm';
import SignUpForm from '../components/authentication/signUpForm';
import ContactAdmin from '../components/authentication/contactAdmin';
import { useLocation } from 'react-router-dom';

const Authentication = () => {
  const location = useLocation();

  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.textField}>
            <div className={styles.firstTextField}>
              <div className={styles.triangle} />
              <span>Welcome to</span>
            </div>
            <div className={styles.secondTextField}>
              <span>Customer Portal</span>
            </div>
            <div className={styles.thirdTextField}>
              <span>Simplify your work life with</span>
              <span>Google  Workspace</span>
            </div>
          </div>
          <svg width="700" height="260">
            <path d="M100,200 Q260,100 400,200 T600 200" fill="none" stroke="#FF6C36" strokeWidth="2px"/>
          </svg>
        </div>
        <div className={styles.rightContainer}>
          {
            (location?.pathname !== undefined && location.search === "" && location.pathname.indexOf('login') !== -1) && 
            <LoginForm />
          }
          {
            (location?.pathname !== undefined && location.search.indexOf('contactAdmin') !== -1) && 
            <ContactAdmin />
          }
          {
            (location?.pathname !== undefined && location.pathname.indexOf('signUp') !== -1) && 
            <SignUpForm />
          }
        </div>
      </div>
    </div>
  )
}
export default Authentication