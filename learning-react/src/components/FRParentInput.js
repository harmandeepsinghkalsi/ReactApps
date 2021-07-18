import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class FRParentInput extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <h1>Ref Forwarding</h1>
                <ForwardRefInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
