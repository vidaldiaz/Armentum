import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../services/authService'

class Login extends Component {
  state = {
    name: '',
    password: '',
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await AUTH_SERVICE.login(this.state)
    this.props.history.push('/profile')
  }

  render() {
    return (
      <main className="main-home">
        <div className="home-container">
          <h1>Login</h1>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="username"
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="password"
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
        <Link to={'/'}>
          <div className="return-main">Return Home</div>
        </Link>
      </main>
    )
  }
}

export default Login
