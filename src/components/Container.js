import React from 'react'

import styles from './Container.module.scss'

const Container = ({ children, className, theme }) => (
  <div className={`${styles.container} ${styles[theme]} ${className || ''}`}>
    {children}
  </div>
)

export default Container
