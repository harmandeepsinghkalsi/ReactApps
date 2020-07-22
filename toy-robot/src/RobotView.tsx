import React, { useState } from 'react';
import './RobotView.css';
import {Robot} from './Robot';
import {Faces} from './Robot';


const robot = new Robot();

export const RobotView: React.FC = () => {

  const [x, setX] = useState(robot.x);
  const [y, setY] = useState(robot.y);
  const [orientation, setOri] = useState(robot.orientation);
  const table = new Array(5).fill(0).map(row => new Array(5).fill(0));
 

  const place = () => {
    robot.placeRobot(x,y,orientation);
  }

  const move = () => {

    robot.move();
    setX(robot.x);
    setY(robot.y);
    setOri(robot.orientation);
    
  }

  const left = () => {

    robot.faceLeft();
    setX(robot.x);
    setY(robot.y);
    setOri(robot.orientation);
    

  }

  const right = () => {

    robot.faceRight();
    setX(robot.x);
    setY(robot.y);
    setOri(robot.orientation);

  }

  const report = () => {

    setX(robot.x);
    setY(robot.y);
    setOri(robot.orientation);
    alert(robot.generateReport());
  }

    return (
  <div>
      <table>
        <tbody>
        {table.map((rowArray, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {
                    rowArray.map((colArray, colIndex) => {
                      return (
                        <td key={colIndex}>{((rowIndex === x) && (colIndex === y)) ? Faces[orientation] : '' }</td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
      </tbody>
</table>



x:<input onChange={ e => setX(parseInt(e.target.value))} type="text" />
y: <input onChange={ e => setY(parseInt(e.target.value))} type="text" />
orientation: <select onChange={e => setOri(e.target.value)}>
  <option value="1">North</option>
  <option value="3">South</option>
  <option value="2">East</option>
  <option value="4">West</option>
</select>
<button onClick={place}>Place Robot</button>  
<button onClick={move}>Move</button>
<button onClick={left}>Left</button>
<button onClick= {right}>Right</button>
<button onClick={report}>Report</button>
</div>
    );


  }

