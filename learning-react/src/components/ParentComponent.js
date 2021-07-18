import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName :'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(data){
        alert(`Hello ${this.state.parentName} from ${data}`)
    }
    
    render() {
        return (
            <div>
                <h2>Methods as Props</h2>
                <ChildComponent greetParent={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
