import React from 'react';
import './styles.css';
import ReactNipple from 'react-nipple';


const Control = () => (

    <div className="joy">
        <ReactNipple 
        options={{mode: 'static', position: {top: '50%', right: '50%'}}}
        style={{
            width: 150,
            height: 150,
            position: 'relative',
        }}
        onMove={(data, evt) => console.log(evt.direction)} />
    </div>

)
export default Control;
