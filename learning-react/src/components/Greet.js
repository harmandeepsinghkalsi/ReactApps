import React from 'react';

// Functional Components : 

// This is normal function
// function Greet () {
//     return <h1>Hello Harman!</h1>
// }

// This is arrow function

// const Greet = () => {
//     return(<h1>Hello Harman from Function Component</h1>)
// }

//Function component with props . The props are immutable


const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}! The name is passed as props</h1>
            <p>{props.children}</p>
        </div >
    )
}

// destructing the props :

// 1. In the parameters itself
// function Greet({name}) {
//     return (
//         <div>
//             {name}
//         </div>
//     )
// }

//2. In function body


// function Greet(props) {

//     const {name} = props;
//     return (
//         <div>
//             {name}
//         </div>
//     )
// }






// This explains the named export which means you have to use the same name with curly braces
//to import this component

// export const Greet = () => {
//     return(<h1>Hello Harman!</h1>)
// }


export default Greet; // This is default export . You can use any name while importing it.