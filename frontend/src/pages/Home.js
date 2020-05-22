import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <main className="main-home">
    <div className="home-container">
      <img className="armentum-logo" src="./armentum_logo.png" alt="logo" />
      <div className="armentum-home">
        <h1>Armentum</h1>
        <small style={{ fontStyle: 'italic' }}>"Reaching the goal together"</small>
      </div>
      <div className="home-buttons">
        <Link className="main-button" to={'/login'}>
          Login
        </Link>
        <Link className="main-button" to={'/signup'}>
          Signup
        </Link>
      </div>
    </div>
  </main>
)

export default Home
