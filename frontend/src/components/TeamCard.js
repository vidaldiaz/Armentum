import React from 'react'
import { Card, Col, Row } from 'antd'
import TEAM_SERVICE from '../services/teamService'

const TeamCard = (props) => {
  //console.log('props', props)

  return (
    <div>
      <h1>Teams</h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {props.allTeams?.map((team, i) => (
            <Col span={8} key={i}>
              <Card key={team._id} title={team.teamName} bordered={true}>
                <p>{team.teamDescription}</p>
                <div>
                  <h4>Members:</h4>
                  {team.teamMembers.map((member) => (
                    <h5 key={member}>{member}</h5>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
export default TeamCard
