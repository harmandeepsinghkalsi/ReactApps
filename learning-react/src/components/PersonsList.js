import React from 'react'
import Person from './Person';

function PersonsList() {

    const names = ['Harman', 'Navdeep', 'Amandeep'];
    const nameList = names.map(name => <h2>{name}</h2>)

    const persons = [

        {
            id: 1,
            name: "Harman",
            age: 26,
            skill: "Software"
        },
        {
            id: 2,
            name: "Navdeep",
            age: 31,
            skill: "English"
        },
        {
            id: 3,
            name: "Amandeep",
            age: 34,
            skill: "Chemistry"
        }
    ]
    return (

        // Approach1 : looping over array in return 
        // <div>
        //     <h1>Rendering List</h1>
        //     {names.map(name => <h2>{name}</h2>)}
        // </div>

        //Approach2 : Compute the list outside the return
        //<div>{nameList}</div>

        //Approach3: Recommended way to do it in a separate function
        // We should only use index as key if items in list dont have unique id, list is static and list will not be filtered or ordered
        <div>
            <h2>List Rendering</h2>
            {persons.map(person => <Person key={person.id} person={person} />)}
        </div>

    )
}

export default PersonsList
