import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [latitude,setLatitude]= useState(0);
    window.navigator.geolocation.getCurrentPosition(
        (position) => {console.log(position); setLatitude(position.coords.latitude)},
        (err) => console.log(err)
    );
    return(

    
    <div>{latitude}</div>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'));