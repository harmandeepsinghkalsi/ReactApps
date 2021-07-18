import React from 'react';
import '../myStyles.css';

// how to apply multiple classes using template literals. props driving the class to be applied.
function StyleSheet(props) {

    let className = props.primary ? 'primary' : '';
    return (
        <div>
           <h1 className={`${className} font-xl`}> StyleSheet </h1>
        </div>
    )
}

export default StyleSheet
