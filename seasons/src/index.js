import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

// This was made to check the longitutde and latitutde , later on changed for some other scenario
// const App = () => {

//     const [latitude,setLatitude]= useState(0);
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {console.log(position); setLatitude(position.coords.latitude)},
//         (err) => console.log(err)
//     );
//     return(

    
//     <div>{latitude}</div>

//     )
// }

class CardDeck extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        data: [
          {title: 'Cat 1'},
          {title: 'Cat 2'},
          {title: 'Cat 3'}
        ]
      }
    }
    
    render() {
      return (
        <div class="card-deck">
        {this.state.data.map((item, index) =>
              <Card
                key={index}
                title={item.title}
                index={index}
                id={index}
              />
             )}
        </div>
      );
    }
    
    }

ReactDOM.render(<CardDeck/>,document.getElementById('root'));