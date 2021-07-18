import React, { Component } from 'react'

class ClassClick extends Component {

    
    clickHandler() {
        alert("Class Component Button Clicked")
    }



    render() {
        return (
            <div>
                <h2>Event Handling in class component</h2>
                <button onClick={this.clickHandler}>Click!</button>
            </div>
        )
    }
}

export default ClassClick
