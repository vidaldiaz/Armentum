import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../services/authService'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await AUTH_SERVICE.signup(this.state)
    this.props.history.push('/login')
  }

  render() {
    return (
      <main className="main-home">
        <div className="home-container">
          <h1>Sign Up</h1>

          <form onSubmit={this.handleSubmit}>
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
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="email"
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
            <input type="submit" value="Signup" />
          </form>
        </div>
        <Link to={'/'}>
          <div className="return-main">Return Home</div>
        </Link>
      </main>
    )
  }
}

export default Signup
