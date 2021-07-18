import React, { Component } from 'react'

class Input extends Component {


    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();

    }

    focusInput(){
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <h1>Class Components Refs</h1>
                <input type="text" ref = {this.inputRef}/>
            </div>
        )
    }
}

export default Input
