import React, { Component } from 'react'
import StageCard from '../components/StageCard'
import PROJECT_SERVICE from '../services/projectService'
import STAGE_SERVICE from '../services/stageService'

class ManageProject extends Component {
  state = {
    projectData: null,
  }

  componentDidMount = async () => {
    const generalData = await PROJECT_SERVICE.getOneProject(this.props.match.params.id)
    const { project } = generalData.data
    this.setState({ projectData: project })
    console.log(this.state.projectData)
  }

  stageData = () => {
    return this.stage.projectStages.map((stage) => stage)
  }

  render() {
    return (
      <div>
        <div>{/* <h1>Project: {this.state.projectData?.projectName}</h1> */}</div>
        <StageCard projectData={this.state.projectData} />
      </div>
    )
  }
}

export default ManageProject
