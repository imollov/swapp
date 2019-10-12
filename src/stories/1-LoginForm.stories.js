import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import LoginForm from '../components/LoginForm'
import { Container, Card } from 'reactstrap'
import styles from './LoginForm.module.scss'

export default {
  title: 'LoginForm'
}

export const Raw = () => {
  return <LoginForm />
}

export const Pretty = () => {
  return (
    <Card className={styles.card}>
      <LoginForm username="demo" password="password" />
    </Card>
  )
}

export const Themed = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <Container className={[styles.container, styles[theme]]}>
      <Card className={styles.card}>
        <LoginForm className={styles.form} />
      </Card>
    </Container>
  )
}

export const Behaviour = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  const errorMessage = text('Error message')

  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const onInputChange = input => {
    setState({ ...state, ...input })
    action('input-changed')(input)
  }

  const onSubmit = () => {
    action('submitted')(state)
  }

  return (
    <Container className={[styles.container, styles[theme]]}>
      <Card className={styles.card}>
        <LoginForm
          className={styles.form}
          username={state.username}
          password={state.password}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        />
      </Card>
    </Container>
  )
}
