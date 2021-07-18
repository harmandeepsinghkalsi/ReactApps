import React from 'react'

// If we use div tag to enclose the td tags , it will give error that td should not be child of div, hence used fregments

const items = [{ id: 1, title: 'You dont know JS' }, { id: 2, title: 'Eloquent JS' }, { id: 3, title: 'Intro to JS' }]

function Columns() {
    return (
        <>
            {/* {
                items.map(item => (
                    <React.Fragment key={item.id} >
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Harman</td>
        </>
    )
}

export default Columns
