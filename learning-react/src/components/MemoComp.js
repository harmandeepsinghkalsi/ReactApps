import React from 'react'

// What pure component is to class component , memo is to functional components
function MemoComp({name}) {
    console.log('Rendering the memo component');
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(MemoComp)
