import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {


    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default withCounter(ClickCounter,10)
