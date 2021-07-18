import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'text'
        }
        this.clickHandler = this.clickHandler.bind(this); // Binding in class constructor
    }

    // clickHandler() {
    //     this.setState({ message: "State changed!" })
    // }

    clickHandler = (value) => {
        console.log('test',value);
        this.setState({message : "State changed!"})
    }

    render() {
        return (
            <div>
                <h2>This is about learning multiple ways of event handling</h2>
                <span>{this.state.message}</span>
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bind</button> */}
                <button onClick={() => this.clickHandler("testing")}>Event Bind</button>
                {/* <button onClick={this.clickHandler}>Event Bind</button> */}
            </div>
        )
    }
}

export default EventBind
