import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3>My name is {person.name}. I am {person.age} years old. I am skilled in {person.skill}</h3>
        </div>
    )
}

export default Person
