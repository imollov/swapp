import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import LoginForm from '../components/LoginForm'
import styles from './LoginForm.module.scss'

export default {
  title: 'LoginForm'
}

export const Raw = () => {
  return <LoginForm />
}

export const Pretty = () => {
  return (
    <div className={styles.card}>
      <LoginForm username="demo" password="password" />
    </div>
  )
}

export const Themed = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.card}>
        <LoginForm className={styles.form} />
      </div>
    </div>
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
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.card}>
        <LoginForm
          className={styles.form}
          username={state.username}
          password={state.password}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  )
}
