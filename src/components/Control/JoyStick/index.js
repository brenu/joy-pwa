import React from 'react';
import './styles.css';
import { Joystick } from 'react-joystick-component';

const JoyStick = () => (
    <div>
        <Joystick size={100} baseColor="red" stickColor="blue" disabled={true}></Joystick>
    </div>
);

export default JoyStick;
