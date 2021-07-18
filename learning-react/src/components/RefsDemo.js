import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        // Access refs using craeteRef
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element;
        }
    }

    componentDidMount(){
        // 1. by default focus on the first field in form , so that user can start typing.
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    // 2. to get the data from the input field
    clickHandler = ( ) =>{
        console.log(this.inputRef.current.value);
    } 
    
    render() {
        return (
            <div>
                <h1>Refs Demo</h1>
                <input style={{marginLeft:'5px'}} type="text" ref={this.inputRef}/>
                <input style={{marginLeft:'5px'}} type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click!</button>
            </div>
        )
    }
}

export default RefsDemo
