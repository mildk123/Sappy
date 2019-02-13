import React, { Fragment } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Elliot from '../../Assets/elliot.jpg'

class UserCard extends React.Component {
  render() {
    const { name, usertype, desc, Location, Phone, skills, reviews } = this.props
    return (
      <div style={{padding: 25}}>
        <Card
          image={Elliot}
          header={name}
          meta={usertype}
          description={desc}
          extra={<Fragment>
            <p>
              <Icon name='map marker alternate' />
              Location : {Location}
            </p>

            <p>
              <Icon name='call' />
              Phone : {Phone}
            </p>
            <p>
              <Icon name='file text' />
              Skills : {skills}
            </p>
            <p>
              <Icon name='chat' />
              Reviews : {reviews}
            </p>
          </Fragment>}

        />
      </div>
    )
  }
}
export default UserCard

