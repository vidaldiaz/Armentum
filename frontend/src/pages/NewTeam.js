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
    members: [],
  }

  componentDidMount = async () => {
    const response = await USER_SERVICE.allUsers()
    const users = response.data.users
    this.setState({ allUsers: users })
    //console.log(this.state.allUsers)
  }

  onFinish = async (values) => {
    console.log(this.state.members)
    console.log('Values:')
    console.log(values)
    // console.log('Value:')
    // console.log(value)
    console.log(this.state)
    const { teamName, teamDescription } = this.state
    const responseTeam = await TEAM_SERVICE.newTeam({ teamName, teamDescription })
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
      this.setState({ members: this.value })
      console.log('value', value)
      console.log(`selected ${value}`)
      return value
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
