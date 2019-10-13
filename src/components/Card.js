import React from 'react'
import {
  Card as CardContainer,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap'
import styles from './Card.module.scss'

const Card = ({ img, title, subtitle, text, className, onClick, children }) => (
  <CardContainer className={`${styles.card} ${className || ''}`}>
    {img && <CardImg src={img} onClick={onClick} />}
    <CardBody>
      {title && <CardTitle onClick={onClick}>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {text && <CardText>{text}</CardText>}
      {children}
    </CardBody>
  </CardContainer>
)

export default Card
