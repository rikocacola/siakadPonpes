import React from 'react';

import { Table, Button} from 'react-bootstrap';

export default class ListSantri extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            santrii : [],
            response : {},
            error: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/getSantri")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    santrii:result
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    deleteSantri(idSantri) {
        const {santrii} = this.state;

        const apiUrl = "http://localhost:3000/deleteSantri/";
        const formData = new FormData();
        formData.append('idSantri', idSantri);

        const options = {
            method: 'DELETE',
            body: formData
        }

        fetch((apiUrl + idSantri), options)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    response: result,
                    santrii : santrii.filter(santri => santri.idSantri !== idSantri)
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    render(){
        const { error, santrii} = this.state;

        if (error) {
            return(
                <div>
                    Error : {error.message}
                </div>
            )
        } return(
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#ID</th>
                        <th>Nama</th>
                        <th>NISN</th>
                        <th>Alamat</th>
                        <th>No. HP</th>
                        <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {santrii.map(santri => (
                        <tr key={santri.idSantri}>
                        <td>{santri.idSantri}</td>
                        <td>{santri.namaSantri}</td>
                        <td>{santri.nisnSantri}</td>
                        <td>{santri.alamatSantri}</td>
                        <td>{santri.nikSantri}</td>
                        <td>
                            {/* <Button variant='info' onClick={() => this.props.editUstadz(ustad.idUstadz)}>
                                Edit
                            </Button> */}
                            <Button variant='danger' onClick={() => this.deleteSantri(santri.idSantri)}>
                                Delete
                            </Button>
                        </td>
                        </tr>   
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}