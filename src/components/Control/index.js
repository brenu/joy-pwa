import React from 'react';
import './styles.css';

import Actions from './Actions'
import JoyStick from './JoyStick'

const Control = () => (
    <div className='ctrl'>
        <JoyStick />
        <Actions />
    </div>
);

export default Control;
