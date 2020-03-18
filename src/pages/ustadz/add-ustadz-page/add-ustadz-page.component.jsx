import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {format, parseISO} from 'date-fns';

import { Row , Form, Col, Button, Modal, Alert, Container } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const optionsStatusAktif = [
    {value: "A", label: "Aktif"},
    {value: "TA", label: "Tidak Aktif"}
];

const optionsJenisKelamin = [
    {value: "L", label: "Laki-Laki"},
    {value: "P", label: "Perempuan"}
];

const optionsAgama = [
    {value: "Islam", label: "Islam"},
    {value: "Protestan", label: "Kristen Protestan"},
    {value: "Katholik", label: "Kristen Katholik"},
    {value: "Buddha", label: "Buddha"},
    {value: "Hindu", label: "Hindu"},
    {value: "Konghucu", label: "Konghucu"},
];

const optionsKewarganegaraan = [
    {value: "WNI", label: "Warga Negara Indonesia"},
    {value: "WNA", label: "Warga Negara Asing"}
];

const optionsPendidikan = [
    {value: "SD", label: "SD/MI"},
    {value: "SMP", label: "SMP/MTS"},
    {value: "SMA", label: "SMA/MA/SMK"},
    {value: "D1", label: "Diploma 1"},
    {value: "D2", label: "Diploma 2"},
    {value: "D3", label: "Diploma 3"},
    {value: "D4", label: "Diploma 4"},
    {value: "S1", label: "Sarjana"},
    {value: "S2", label: "Magister"},
    {value: "S3", label: "Doktor"},
];

class AddUstadz extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.state = {
            niyUstadz : '',
            namaUstadz : '',
            nikUstadz : '',
            tempatLahirUstadz : '',
            tanggalLahirUstadz : '',
            agamaUstadz : '',
            kewarganegaraan : '',
            jenisKelamin : '',
            alamatUstadz : '',
            noHP : '',
            email : '',
            pendidikanUstadz : '',
            statusAktif : '',
            modal : false,
            redirect : false,
            selectedOption1 : null,
            selectedOption2 : null,
            selectedOption3 : null,
            selectedOption4 : null,
            selectedOption5 : null
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    setRedirect() {
        this.setState({
            redirect: true
        });
    }

    handleSelect1 = selectedOption1 => {
        // let options1 = selectedOption1.value;
        this.setState({
            selectedOption1,
            agamaUstadz : selectedOption1.value
        });
        console.log(`Option Selected:`, selectedOption1.value)
    }

    handleSelect2 = selectedOption2 => {
        // let options2 = selectedOption2.value;
        this.setState({
            selectedOption2,
            kewarganegaraan : selectedOption2.value
        });
        console.log(`Option Selected:`, selectedOption2.value)
    }

    handleSelect3 = selectedOption3 => {
        // let options3 = selectedOption3.value;
        this.setState({
            selectedOption3,
            jenisKelamin : selectedOption3.value
        });
        console.log(`Option Selected:`, selectedOption3.value)
    }

    handleSelect4 = selectedOption4 => {
        // let options4 = selectedOption4.value;
        this.setState({
            selectedOption4,
            pendidikanUstadz : selectedOption4.value
        });
        console.log(`Option Selected:`, selectedOption4.value)
    }

    handleSelect5 = selectedOption5 => {
        // let options5 = selectedOption5.value;
        this.setState({
            selectedOption5,
            statusAktif : selectedOption5.value
        });
        console.log(`Option Selected:`, selectedOption5.value)
    }

    handleDate = (date) => {
        this.setState({
            tanggalLahirUstadz: date
        })
        console.log(date)
    }

    handleChange = (event) => {
        const name  = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post(`http://localhost:3000/postUstadz`,
        {
            niyUstadz: this.state.niyUstadz,
            namaUstadz: this.state.namaUstadz,
            nikUstadz: this.state.nikUstadz,
            tempatLahirUstadz: this.state.tempatLahirUstadz,
            tanggalLahirUstadz: format(this.state.tanggalLahirUstadz, 'yyyy-MM-dd'),
            agamaUstadz: this.state.agamaUstadz,
            kewarganegaraan : this.state.kewarganegaraan,
            jenisKelamin: this.state.jenisKelamin,
            alamatUstadz: this.state.alamatUstadz,
            noHP: this.state.noHP,
            email: this.state.email,
            pendidikanUstadz: this.state.pendidikanUstadz,
            statusAktif: this.state.statusAktif
        }
        ).then(response => {
            console.log(response);
            console.log(response.data);
            this.toggle();
        })
        console.log(this.state)
    }

    render(){
        
        const {selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5} = this.state;
        if (this.state.redirect === true) {
            return <Redirect to='/ustadz'/>
        }
        return(
            <div className="">
                <Modal toggle={this.toggle}>
                    <Alert color="light">Data</Alert>
                    <Button onClick={this.setRedirect}>OK</Button>
                </Modal>
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
                                    value={this.state.niyUstadz}
                                    onChange={this.handleChange}
                                    placeholder="NIY Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="namaUstadz">
                                    <Form.Label>Nama Ustadz</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="namaUstadz"
                                    value={this.state.namaUstadz}
                                    onChange={this.handleChange}
                                    placeholder="Nama Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="nikUstadz">
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
                                </Form.Group>
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

export default AddUstadz;
