import React from 'react';
import {Link} from 'react-router-dom';

import { Alert, Button, Container } from 'react-bootstrap';

import ListUstadz from '../list-ustadz/list-ustadz.component';
import AddUstadz from '../add-ustadz-page/add-ustadz-page.component';

class UstadzPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h2>Data Ustadz</h2>
                    <div>
                        <Button>
                            <Link to='/ustadz/tambah'>
                                Tambah Data
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className='ustadz-page'>
                        <ListUstadz/>
                </div>
            </div>
        )
    }
}
export default UstadzPage;
