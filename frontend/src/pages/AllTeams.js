import React, { Component } from 'react'
import TeamCard from '../components/TeamCard'
import TEAM_SERVICE from '../services/teamService'

class AllTeams extends Component {
  state = {
    allTeams: null,
    userFullData: null,
  }

  componentDidMount = async () => {
    const allTeams = await TEAM_SERVICE.allTeams()
    console.log('data', allTeams.data)
    this.setState({ allTeams: allTeams.data })
    console.log('state', this.state.allTeams)
  }

  render() {
    return <TeamCard allTeams={this.state?.allTeams} userFullData={this.state?.userFullData} />
  }
}

export default AllTeams
