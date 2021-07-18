import React, { Component } from 'react'
import LifecycleB from './LifecycleB';


/* Order of lifecycle hooks:

    1. Mounting Phase:
        constructor -> getDerivedStateFromProps -> render -> componentDidMount (of child) ->
        componentDidMount(of parent)
    2. Updating Phase:
        getDerivedStateFromProps -> shouldComponentUpdate -> render -> 
        getSnapshotBeforeUpdate(child->parent) -> componentDidUpdate(child->parent) 
    3. Unmounting Phase:
        componentWillUnmount
    4. Error Handling Phase:
        getDerivedStateFromError ->  componentDidCatch

*/
class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Harman'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    componentWillUnmount(){

    }

    static getDerivedStateFromError(error){

    }

    componentDidCatch(){

    }

    changeState = event => {
        this.setState({
            name: 'State Changed'
        })
    }

    render() {
        console.log('LifecycleA render');
        return (
        <div>
            <h1>LifecycleA</h1>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleB />
        </div>
        )
    }
}

export default LifecycleA
