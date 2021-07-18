import React, { PureComponent } from 'react'


// 1.They do implement shouldComponentUpdate with shallow comparison of props and state
// 2.Is give performance boost , if there is no change in props or state
// 3.It is good to have all the children components to be pure comp, to avoid unnecessary behaviour
// 4.Never mutate the existing the object or array , always return new array or object because then even if 
// there is change in the array or object the pure component will not get to know since 
// in shallow comparison the reference is checked for complex datta types and not primitive data types
class PureComp extends PureComponent {

    render() {
        console.log('Pure Comp render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
