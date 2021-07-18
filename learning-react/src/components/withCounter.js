import React, { Component } from 'react'

// When we pass props to the component using HOC , the props are passed to HOC and the actual component ,
// which should be passed to the actual component using {...this.props}

// Passing paramters in easy in HOC
const withCounter = (WrappedComponent,incrementNum) => {

    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        incrementCount =() => {
            this.setState(prevState => {
                return {count : prevState.count + incrementNum};
            })
        }

        render () {
            return <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
            />
        }
    }
    return WithCounter
}

export default withCounter