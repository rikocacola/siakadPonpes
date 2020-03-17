import React from 'react';

import {Button} from 'react-bootstrap';

import './topbar.styles.scss'

const TopBar = () => (
    <div className='top-bar'>
        <h2>Nama</h2>
        <Button variant="outline-success">Masuk</Button>
    </div>
)

export default TopBar
