import React, { Component } from 'react'
import StageCard from '../components/StageCard'
import PROJECT_SERVICE from '../services/projectService'
import STAGE_SERVICE from '../services/stageService'

class ManageProject extends Component {
  state = {
    projectData: null,
    stagesData: [],
  }

  componentDidMount = async () => {
    const generalData = await PROJECT_SERVICE.getOneProject(this.props.match.params.id)
    const { project } = generalData.data
    this.setState({ projectData: project })
    //console.log(this.state.projectData)
  }

  getStagesData = async () => {
    const stagesData = await PROJECT_SERVICE.getStagesFullData(this.props.match.params.id)
    this.setState({ stagesData })
    console.log(this.state.stagesData)
  }

  render() {
    const fullData = this.state.stagesData
    return (
      <div>
        <StageCard projectData={this.state.projectData} />
      </div>
    )
  }
}

export default ManageProject
