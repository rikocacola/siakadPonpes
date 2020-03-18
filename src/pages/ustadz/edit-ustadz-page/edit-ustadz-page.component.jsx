import React from 'react';
import axios from 'axios';
// import {format} from 'date-fns'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const optionsStatusAktif = [
    {value: "A", label: "Aktif"},
    {value: "TA", label: "Tidak Aktif"}
];

class EditUstadz extends React.Component{
    constructor(props){
        super(props);

        }
        componentDidMount(niyUstadz){
            axios.get(`http://localhost:3000/getUstadz/${this.props.match.params.niyUstadz}` )
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function (){
    
            })
        }
    
        render(){
            console.log(this.props)
            return(
                <div>
                    <Container>
                        <div>
                            <h2>Add Ustadz</h2>
                        </div>
                        <Row>
                            <Col sm="8">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="niyUstadz">
                                        <Form.Label>NIY Ustadz</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="niyUstadz"
                                        // value={this.state.niyUstadz}
                                        // onChange={this.handleChange}
                                        placeholder={this.props.match.params.niyUstadz}
                                        disabled
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="namaUstadz">
                                        <Form.Label>Nama Ustadz</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="namaUstadz"
                                        // value={this.state.namaUstadz}
                                        // onChange={this.handleChange}
                                        placeholder={this.props.match.params.namaUstadz}
                                        />
                                    </Form.Group>
                                    {/* <Form.Group controlId="nikUstadz">
                                        <Form.Label>NIK Ustadz</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="nikUstadz"
                                        value={this.state.nikUstadz}
                                        onChange={this.handleChange}
                                        placeholder="NIK Ustadz"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="tempatLahirUstadz">
                                        <Form.Label>Tempat Lahir Ustadz</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="tempatLahirUstadz"
                                        value={this.state.tempatLahirUstadz}
                                        onChange={this.handleChange}
                                        placeholder="Tempat Lahir Ustadz"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="tanggalLahirUstadz">
                                        <Form.Label>Tanggal Lahir Ustadz</Form.Label>
                                        <DatePicker 
                                        selected={this.state.tanggalLahirUstadz}
                                        onChange={this.handleDate}
                                        name="tanggalLahirUstadz"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="agamaUstadz">
                                        <Form.Label>Agama Ustadz</Form.Label>
                                        <Select
                                        value={this.state.selectedOption1}
                                        onChange={this.handleSelect1}
                                        options={optionsAgama}
                                        placeholder="Agama"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="kewarganegaraan">
                                        <Form.Label>Kewarganegaraan</Form.Label>
                                        <Select
                                        value={this.state.selectedOption2}
                                        onChange={this.handleSelect2}
                                        options={optionsKewarganegaraan}
                                        placeholder="Kewarganegaraan"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="jenisKelamin">
                                        <Form.Label>Jenis Kelamin</Form.Label>
                                        <Select
                                        value={this.state.selectedOption3}
                                        onChange={this.handleSelect3}
                                        options={optionsJenisKelamin}
                                        placeholder="Jenis Kelamin"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="alamatUstadz">
                                        <Form.Label>Alamat Ustadz</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="alamatUstadz"
                                        value={this.state.alamatUstadz}
                                        onChange={this.handleChange}
                                        placeholder="Alamat Ustadz"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="noHP">
                                        <Form.Label>Nomer Handphone</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="noHP"
                                        value={this.state.noHP}
                                        onChange={this.handleChange}
                                        placeholder="Nomer Handphone"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="Email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="pendidikanUstadz">
                                        <Form.Label>Pendidikan Ustadz</Form.Label>
                                        <Select
                                        value={this.state.selectedOption4}
                                        onChange={this.handleSelect4}
                                        options={optionsPendidikan}
                                        placeholder="Pendidikan Terakhir"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="statusAktif">
                                        <Form.Label>Status Aktif Ustadz</Form.Label>
                                        <Select
                                        value={this.state.selectedOption5}
                                        onChange={this.handleSelect5}
                                        options={optionsStatusAktif}
                                        placeholder={optionsStatusAktif[0].label}
                                        />
                                    </Form.Group> */}
                                    <Form.Group>
                                        <Button variant='success' type='submit' onClick={e=>this.handleSubmit(e)}>Tambah</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }

export default EditUstadz;