import React, { Component } from 'react';


// Class components with props . The props are immutable
class Welcome extends Component {


    render() {
        const {name} = this.props; // destructing the props.
        
        //return <h1> Welcome {this.props.name} from Class Component . The name {this.props.name} is passed as props</h1>
        return <h1> Welcome {name} from Class Component . The name {name} is passed as props</h1>

    }

}

export default Welcome;