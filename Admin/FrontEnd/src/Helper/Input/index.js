import React, { Component, Fragment } from 'react'
import { Input, Dropdown } from 'semantic-ui-react'



const options = [
    { key: 'Name', text: 'Name', value: 'emp_fname' },
    { key: 'Department', text: 'Department', value: 'emp_dept' },
    { key: 'Band', text: 'Band', value: 'emp_band' },
    { key: 'Specifications', text: 'Specifications', value: 'emp_specs' },
    { key: 'Fathers name', text: 'Fathers name', value: 'father_info.name' },
    { key: 'House No', text: 'House No', value: 'address[0].house_no' },
    { key: 'Flat No', text: 'Flat No', value: 'address[0].flat_no' },
]

class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false
        }
    }

    render() {
        return (
            <Fragment>
                <Input
                    onChange={(e) => { this.props.textChange(e.target.value) }}
                    fluid
                    label={<Dropdown onChange={(event, data) => this.props.dropHandler(event, data)} defaultValue='emp_fname' options={options} />}
                    labelPosition='left'
                    placeholder='Search...'
                    action={{
                        onClick: () => this.props.buttonHandler(),
                        color: 'twitter',
                        labelPosition: 'left',
                        icon: 'search',
                        content: 'Search'
                    }}
                />
            </Fragment>
        )
    }
}


export default Inputs
