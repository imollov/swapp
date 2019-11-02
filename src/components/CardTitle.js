import React from 'react'

import styles from './CardTitle.module.scss'

const CardTitle = ({ text, className, theme, size }) => {
  const Title = `h${
    size === 'large' ? 1 : size === 'medium' ? 2 : size === 'small' ? 3 : 2
  }`

  return (
    <Title
      className={`${styles.cardTitle} ${styles[theme]} ${className || ''}`}
    >
      {text}
    </Title>
  )
}

export default CardTitle
