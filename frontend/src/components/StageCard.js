import React from 'react'
import { Card, Col, Row } from 'antd'

const StageCard = (props) => {
  console.log('props', props)
  return (
    <div>
      <h1>Project Name: {props.projectData?.projectName}</h1>
      <h3>Project Description: {props.projectData?.projectDescription}</h3>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {props.stagesData?.map((stage, i) => (
            <Col span={8} key={i}>
              <Card key={stage?._id} title={stage?.stageName} bordered={true}></Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default StageCard
