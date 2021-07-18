import React from 'react';

// Difference between JSX and native HTML . There are difference like class->className , for->htmlFor and
// camel casing for the methods like onClick , tabIndex
const Hello = (props) => {

    //JSX version
    // return (
    //     <div>
    //         <h1>Hello! This is JSX version</h1>
    //     </div>

    // )

    //Native method

    // This is the reason why React is imported, so that it converts JSX to native HTML
    return React.createElement('div', {id: "hello"}, React.createElement('h1',null,props.name))
}

export default Hello;