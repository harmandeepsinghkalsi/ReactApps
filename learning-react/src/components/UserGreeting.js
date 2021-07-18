import React, { Component } from 'react'
// 1. Using if-else
//2. Using variable inside render method
// 3. Ternary operator
//4. Short-circuiting
export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        


        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h2>Condiitonal Rendering</h2>
                    <span>Welcome Harman!</span>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Condiitonal Rendering</h2>
                    <span>Welcome Guest!</span>
                </div>
            )
        }

        // let message;
        // if (this.state.isLoggedIn)
        //     message = "Welcome Harman"
        // else
        //     message = "Welcome Guest"

        // return <span>{message}</span>

        // return this.state.isLoggedIn ? (<span>Welcome Harman</span>):(<span>Welcome Guest</span>)

        // return (this.state.isLoggedIn && <span>Welcome Harman</span>)
    }
}

export default UserGreeting
