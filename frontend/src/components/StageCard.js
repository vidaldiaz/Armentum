import React from 'react'
import STAGE_SERVICE from '../services/stageService'

const StageCard = (props) => {
  // console.log(props.projectData?.projectStages)

  const stagesData = async () => {
    const result = await Promise.all(
      props.projectData?.projectStages.map(async (stage) => {
        await STAGE_SERVICE.oneStage(stage)
      })
    )
  }

  const stagesInfo = stagesData()

  return (
    <div>
      <h1>Project Name: {props.projectData?.projectName}</h1>
      <h3>Project Description: {props.projectData?.projectDescription}</h3>
    </div>
  )
}

export default StageCard
