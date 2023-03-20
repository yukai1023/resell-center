import React, { useEffect } from 'react';
import styles from './App.module.scss';
import Header from '../components/app/header';
import Navbar from '../components/app/navbar';
import CardManagement from '../components/app/cardManagement';
// import { useLocation } from 'react-router-dom';
const App = () => {
  // const location = useLocation();
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <CardManagement />
        </div>
      </div>
      {/* <div>
        <div className={styles.rightContainer}>
          {
            (location?.pathname !== undefined && location.pathname.indexOf('login') !== -1) && 
            <LoginForm />
          }
          {
            (location?.pathname !== undefined && location.pathname.indexOf('signUp') !== -1) && 
            <SignUpForm />
          }
        </div>
      </div> */}
    </main>
  )
}
export default App