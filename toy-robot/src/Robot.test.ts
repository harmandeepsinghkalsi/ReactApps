// import React from 'react';
// import { render } from '@testing-library/react';
// import  {Robot} from './Robot';
import {Robot} from './Robot';




test('placeRobot', () => {
    
    const robot = new Robot();
    expect(robot.placeRobot(0,0,'North')).toBeTruthy();
    
});

test('left', () => {
    
    const robot = new Robot();
    expect(robot.faceLeft()).toBe("-1, -1, West");
    
});

test('right', () => {
    
    const robot = new Robot();
    expect(robot.faceRight()).toBe("-1, -1, East");
    
});

test('move', () => {
    
    const robot = new Robot();
    robot.placeRobot(0,0,'North');
    expect(robot.move()).toBe("0, 1, 1");
    
});

test('report', () => {
    
    const robot = new Robot();
    robot.placeRobot(0,0,'North');
    robot.move();
    expect(robot.generateReport()).toBe("0, 1, 1");
    
});