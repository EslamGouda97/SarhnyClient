// CardRow.js

import React from 'react';
import styles from './cardRow.module.css';

const CardRow = ({ header, content,image }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={image}  alt='img'/>
        <h2>{header}</h2>
        <p>{content}</p>
      </div>    
    </div>
  );
};

export default CardRow;