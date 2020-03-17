import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.styles.scss';

const SideBar = () => (
    <div className='side-bar'>
        <h2 className='level-container'>
            <Link className='level-container-child' to='/'>
                Admin
            </Link>
        </h2>
        <ul>
            <li><Link to='/ustadz'>Ustadz</Link></li>
            <li><Link to='/santri'>Santri</Link></li>
        </ul>
    </div>
)

export default SideBar;
