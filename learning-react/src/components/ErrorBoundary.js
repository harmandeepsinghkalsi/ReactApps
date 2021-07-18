import React, { Component } from 'react'


// 1. There are 2 methods used for error boundary , getDerivedStateFromError(acts as fallback UI component)
//and componentDidCatch(logs errors) . Placement of error boundaries matter.
//2. They catch all the errors during the rendering , lifecycle methods , in the constructors of whole tree below them 
//except the errors in the event handling say onClick , we have to use try/catch
class ErrorBoundary extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

static getDerivedStateFromError(error){
    return {
        hasError: true
    }
}

componentDidCatch(error, info){
    console.log(error);
    console.log(info);
}

    render() {
        if(this.state.hasError){
            return(
                <h1>Something went wrong!</h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
