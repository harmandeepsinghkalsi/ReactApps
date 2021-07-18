import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // setState has callback as second parameter, if we want to do something post setState is done.
        // this.setState({ count: this.state.count + 1 },
        //     () => { console.log(this.state.count) }
        // )

        // Here we are making using of prevState to update the current state.
        this.setState((prevState,props) => ({
            count: prevState.count+1
        }))
    }

    // Here we will understand the importance of prevState. So the problem arises that when we do a set for n
    // number of times, react may combine the setState calls into one for performance reasons and render at once.
    incrementByThree(){
        this.increment();
        this.increment();
        this.increment();
        
    }

    render() {
        return (
            <div>
                <div>Count ---  {this.state.count} </div>
                <button onClick={() => this.increment()} >Increment</button>
                <button onClick={() => this.incrementByThree()} >Increment By 3</button>
            </div>
        )
    }
}

export default Counter
