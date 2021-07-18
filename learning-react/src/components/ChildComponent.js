import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetParent('From ChildComponent')}>Greet Parent!</button>
        </div>
    )
}

export default ChildComponent
