import React from 'react'
import ReactDOM from 'react-dom'

// Use case: 1. Modal can be rendered under separate root tag
// 2. Event bubbling happens here .
function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal's Demo</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
