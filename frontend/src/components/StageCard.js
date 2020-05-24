import React from 'react'
import STAGE_SERVICE from '../services/stageService'

const StageCard = async (props) => {
  return (
    <div>
      <h1>Project Name: {props.projectData?.projectName}</h1>
      <h3>Project Description: {props.projectData?.projectDescription}</h3>
      <h3>Project Stages: {props.projectData?.projectStages}</h3>
    </div>
  )
}

export default StageCard
