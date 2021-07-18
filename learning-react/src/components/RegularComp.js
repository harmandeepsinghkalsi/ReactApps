import React, { Component } from 'react'

// They dont implement shouldComponentUpdate and returns true by default
class RegularComp extends Component {
    render() {
        console.log('Regular Comp render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
