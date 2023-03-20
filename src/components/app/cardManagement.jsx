import React from 'react';
import styles from './cardManagement.module.scss';
import emptyImg from "../../assets/empty.png"

const CardManagement = () => {
  return (
    <div className={styles.cardManagement}>
      <h2>卡片管理</h2>
      <div className={styles.container}>
        <button className={styles.addCardButton}>
          <span>+</span> 
          <span>新增信用卡</span>
        </button>
        <p className={styles.hintText}>僅支援綁定一張信用卡，如需刪除現有信用卡，請點擊「新增信用卡」</p>
        <div className={styles.headingContainer}>
          <span>持卡人姓名</span>
          <span>信用卡卡號</span>
          <span></span>
        </div>
        <div className={styles.noCardShowing}>
          <img alt='empty' src={emptyImg}/>
          <p>尚未綁定信用卡，請點擊右上角「新增信用卡」進行綁卡動作</p>
        </div>
      </div>
    </div>
  )
}
export default CardManagement 