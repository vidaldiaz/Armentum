import React, { Component } from 'react'
import USER_SERVICE from '../services/userService'
import TEAM_SERVICE from '../services/teamService'
import { Form, Input, Button, Select } from 'antd'

const { Option } = Select

class NewTeam extends Component {
  state = {
    teamName: '',
    teamDescription: '',
    allUsers: [],
    teamMembers: null,
  }

  componentDidMount = async () => {
    const response = await USER_SERVICE.allUsers()
    const users = response.data.users
    this.setState({ allUsers: users })
  }

  onFinish = async (values) => {
    const { teamName, teamDescription } = this.state
    const responseTeam = await TEAM_SERVICE.newTeam({
      teamName,
      teamDescription,
    })
    console.log('new Team', responseTeam)

    const newTeamId = responseTeam.data._id
    const allTeamMembers = this.state.teamMembers

    allTeamMembers.forEach(async (member) => {
      const team = await TEAM_SERVICE.addMember(newTeamId, {
        teamName,
        teamDescription,
        teamMembers: member,
      })
    })

    this.props.history.push(`/team/all`)
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const children = []

    for (let i = 0; i < this.state.allUsers.length; i++) {
      children.push(<Option key={this.state.allUsers[i]._id}>{this.state.allUsers[i].name}</Option>)
    }

    const handleChange = (value) => {
      this.setState({ teamMembers: value })
      console.log(this.state.teamMembers)
    }

    return (
      <main className="main-home">
        <div className="home-container">
          <h1>Create Team</h1>

          <Form name="dynamic_form_item" onFinish={this.onFinish}>
            <Input
              type="text"
              placeholder="Team Name"
              name="teamName"
              id="teamName"
              value={this.state.teamName}
              onChange={this.handleInputChange}
            />
            <br />
            <Input
              type="text"
              placeholder="Description"
              name="teamDescription"
              id="teamDescription"
              value={this.state.projectDescription}
              onChange={this.handleInputChange}
            />
            <br />

            <Select
              mode="tags"
              style={{ width: '50%' }}
              onChange={handleChange}
              tokenSeparators={[',']}
            >
              {children}
            </Select>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    )
  }
}

export default NewTeam
