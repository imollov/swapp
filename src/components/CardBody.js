import React from 'react'

import styles from './CardBody.module.scss'

// todo: get theme from context

const CardBody = ({ children, className, alignItems = '' }) => (
  <div
    className={`${styles.cardBody} ${alignItems &&
      styles[alignItems]} ${className || ''}`}
  >
    {children}
  </div>
)

export default CardBody
