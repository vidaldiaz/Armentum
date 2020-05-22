import React, { Component } from 'react'
import ProjectsByUser from '../components/ProjectsByUser'
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../services/authService'
import handleAsync from '../utils'

class Profile extends Component {
  state = {
    loggedUser: null,
  }

  async componentDidMount() {
    const response = await handleAsync(AUTH_SERVICE.loggedUser)
    this.setState({ loggedUser: response.user })
    console.log(this.state.loggedUser)
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.state.loggedUser?.name}</h1>
        <Link to={'/project/new'}>Create Project</Link>
        <br />
        <Link to={'/team/new'}>Create Team</Link>
        <ProjectsByUser />
      </div>
    )
  }
}

export default Profile
