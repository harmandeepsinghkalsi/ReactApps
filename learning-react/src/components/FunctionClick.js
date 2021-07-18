import React from 'react'

// We are learning event handling here !
function FunctionClick() {

    function handleClick(){
        alert('Functional Component Button Clicked!')
    }

// OnClick we are using event handler function and not calling the event handler function . Important point to note!

    return (
        <div>
            <h2>Event Handling</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FunctionClick
