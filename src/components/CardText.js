import React from 'react'

import styles from './CardText.module.scss'

const CardText = ({ text, className, theme }) => (
  <div className={`${styles.cardText} ${styles[theme]} ${className || ''}`}>
    {text}
  </div>
)

export default CardText
