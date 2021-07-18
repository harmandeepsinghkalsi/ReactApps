import React, {Component } from 'react';

// Introduction to state in React
class Message extends Component {

    constructor() {
        super();
        this.state = {
            text: "Welcome Visitor. We are talking about state",
            buttonText: "Subscribe!",
            isSubscribed: false
        }
    }

    handleClick() {
        if (!this.state.isSubscribed)
            this.setState({ isSubscribed: true, buttonText: "Unsubscribe!", text: "Thank you for subscribing!" });
        else
            this.setState({ isSubscribed: false, buttonText: "Subscribe!", text: "Welcome Visitor. We are talking about state" });

    }

    render() {

        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Message;