import React from 'react'

import styles from './Card.module.scss'

const Card = ({ children, className, theme, orientation = 'vertical' }) => (
  <div
    className={`${styles.card} ${styles[orientation]} ${
      styles[theme]
    } ${className || ''}`}
  >
    {children}
  </div>
)

export default Card
