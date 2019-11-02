import React from 'react'

import styles from './CardImage.module.scss'

const CardImage = ({ imageSrc, className, stickTo = 'top' }) => (
  <img
    src={imageSrc}
    alt=""
    className={`${styles.cardImage} ${styles[stickTo]} ${className || ''}`}
  />
  // <div
  //   className={`${styles.cardImage} ${className || ''}`}
  //   style={{ backgroundImage: `url(${imageSrc})` }}
  // ></div>
)

export default CardImage
