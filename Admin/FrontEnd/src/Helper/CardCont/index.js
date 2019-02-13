import React, { Fragment } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Elliot from '../../Assets/elliot.jpg'

class UserCard extends React.Component {
  render() {
    const { name, usertype, desc } = this.props
    return (
      <Card
        image={Elliot}
        header={name}
        meta={usertype}
        description={desc}
      extra={<Extra {...this.props} />}
      />
    )
  }
}
export default UserCard

function Extra(props) {
  const { Location, Phone, skills, reviews } = props;
  return (
    <Fragment>
      <p>
        <Icon name='location arrow' />
        Location : {Location}
      </p>

      <p>
        <Icon name='call' />
        Phone : {Phone}
      </p>
      <p>
        <Icon name='call' />
        Skills : {skills}
      </p>
      <p>
        <Icon name='call' />
        Reviews : {reviews}
      </p>
    </Fragment>
  )
}