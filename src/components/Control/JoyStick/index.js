import React from 'react';
import './styles.css';
import { Joystick } from 'react-joystick-component';

function handleMove() {
    console.log('moving')
}

function handleStop() {
    console.log('stopped');
}

const JoyStick = () => (
    <div>
        <Joystick size={100} baseColor="red" stickColor="blue" move={handleMove} stop={handleStop}></Joystick>
    </div>
);

export default JoyStick;
