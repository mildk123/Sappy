import React from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <div style={{textAlign: 'center', padding: 50}}>
    <Card color='blue' raised>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          {props.fname}
        </Card.Header>

        <Card.Meta>
          <Popup trigger={<span className='date'>Joined Us On Feb/2015</span>}>
            <Popup.Content >
              Date Joined
          </Popup.Content>
          </Popup>
        </Card.Meta>
        <br />

        <div style={{ textAlign: 'left' }}>
          <Card.Content>
            <Popup trigger={
              <a>
                <Icon circular name='hashtag' />
                {props.id}
              </a>}>
              <Popup.Content >
                ID
          </Popup.Content>
            </Popup>
          </Card.Content>

          <Card.Content>
            <Popup trigger={
              <a>
                <Icon circular name='group' />
                {props.band}
              </a>}>
              <Popup.Content >
                Band
          </Popup.Content>
            </Popup>
          </Card.Content>

          <Card.Content>
            <Popup trigger={
              <a>
                <Icon circular name='computer' />
                {props.specs}
              </a>}>
              <Popup.Content >
                Specifications
          </Popup.Content>
            </Popup>
          </Card.Content>

          <Card.Content extra>
            <Popup trigger={
              <a>
                <Icon circular name='address card' />
                {props.father}
              </a>}>
              <Popup.Content >
                Father's Name
          </Popup.Content>
            </Popup>
          </Card.Content>

          <Card.Content extra>
            <Popup trigger={
              <a>
                <Icon circular name='home' />
                {props.address}
              </a>}>
              <Popup.Content >
                Address
          </Popup.Content>
            </Popup>
          </Card.Content>

        </div>
      </Card.Content>

      <Card.Content extra>
        <Popup trigger={
          <a>
            <Icon circular name='book' />
            {props.dept}
          </a>}>
          <Popup.Content >
            Department
          </Popup.Content>
        </Popup>
      </Card.Content>

    </Card>
  </div>

)



export default CardExampleCard