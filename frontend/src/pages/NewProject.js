import React, { Component } from 'react'
import AUTH_SERVICE from '../services/authService'
import PROJECT_SERVICE from '../services/projectService'
import STAGE_SERVICE from '../services/stageService'
import { Form, Input, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import handleAsync from '../utils'

class NewProject extends Component {
  state = {
    projectName: '',
    projectDescription: '',
    projectOwner: null,
  }

  componentDidMount = async () => {
    const response = await handleAsync(AUTH_SERVICE.loggedUser)
    this.setState({ projectOwner: response.user._id })
  }

  onFinish = async (values) => {
    const { projectName, projectDescription, projectOwner } = this.state
    const responseProject = await PROJECT_SERVICE.newProject({
      projectName,
      projectDescription,
      projectOwner,
    })

    const projectId = responseProject.data.project._id

    values.names.forEach(async (value) => {
      const response = await STAGE_SERVICE.newStage({ stageName: value })
      const projectStages = response.data.stage._id
      await PROJECT_SERVICE.attachStage(projectId, {
        projectName,
        projectDescription,
        projectOwner,
        projectStages,
      })
    })

    this.props.history.push(`/project/${projectId}`)
  }
  openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    })
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await PROJECT_SERVICE.newProject(this.state)
    this.props.history.push('/profile')
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    }

    const DynamicFieldSet = () => {
      const onFinish = (values) => {
        console.log('Received values of form:', values)
      }
    }

    return (
      <main className="main-home">
        <div className="home-container">
          <h1>Create Project</h1>

          <Form name="dynamic_form_item" onFinish={this.onFinish} {...formItemLayoutWithOutLabel}>
            <Input
              type="text"
              placeholder="Project Name"
              name="projectName"
              id="projectName"
              value={this.state.projectName}
              onChange={this.handleInputChange}
            />
            <br />
            <Input
              type="text"
              placeholder="Description"
              name="projectDescription"
              id="Project Description"
              value={this.state.projectDescription}
              onChange={this.handleInputChange}
            />

            <Form.List name="names">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        label={index === 0 ? 'Stage' : ''}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: "Please input stage's name or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Stage Name"
                            name="stageName"
                            style={{ width: '80%' }}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                              remove(field.name)
                            }}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => {
                          add()
                        }}
                        style={{ width: '80%' }}
                      >
                        <PlusOutlined /> Add Stage
                      </Button>
                    </Form.Item>
                  </div>
                )
              }}
            </Form.List>

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

export default NewProject
