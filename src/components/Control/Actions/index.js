import React from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Actions = () => (

    <div>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
        </ButtonGroup>
    </div>

)

export default Actions;
