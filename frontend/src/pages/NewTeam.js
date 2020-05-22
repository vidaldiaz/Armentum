import React, { Component } from 'react'
import { Select } from 'antd'
import USER_SERVICE from '../services/userService'
const { Option } = Select

class NewTeam extends Component {
  state = {
    teamName: '',
    teamDescription: '',
    allUsers: [],
  }

  componentDidMount = async () => {
    const response = await USER_SERVICE.allUsers()
    const users = response.data.users
    console.log(users)
    this.setState({ allUsers: users })
    console.log(this.state.allUsers)
  }

  render() {
    const { allUsers } = this.state

    function onChange(value) {
      console.log(`selected ${value}`)
    }

    function onBlur() {
      console.log('blur')
    }

    function onFocus() {
      console.log('focus')
    }

    function onSearch(val) {
      console.log('search:', val)
    }

    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {this.state.allUsers.map((user) => (
          <Option value={user.name}>{user.name}</Option>
        ))}
      </Select>
    )
  }
}

export default NewTeam
