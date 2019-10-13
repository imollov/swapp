import React, { Component } from 'react'
import { Row } from 'reactstrap'

class LoginForm extends Component {
  handleTextChange = ({ target: { name, value } }) => {
    this.props.onInputChange({ [name]: value })
  }

  handleSubmit = () => this.props.onSubmit()

  render() {
    const { username, password, className, errorMessage } = this.props
    return (
      <div className={className}>
        {errorMessage && <span>{errorMessage}</span>}
        <Row>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleTextChange}
          />
        </Row>
        <Row>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleTextChange}
          />
        </Row>
        <Row>
          <button onClick={this.handleSubmit}>Login</button>
        </Row>
      </div>
    )
  }
}

export default LoginForm
