import { useRef, useState } from "react";
import { Button, Container, Form, InputGroup, Modal, Nav, Navbar, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserData } from "../data-api/dataApi";

import Col from 'react-bootstrap/Col';

export default function Profile() {
    const [user, setUser] = useState(getUserData());

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [validated, setValidated] = useState(false);

    const imageRef = useRef()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    function deleteProduct(id) {

    }
    function editProduct(product) {
        setShow(true)
    }
    function createNewProduct() {
        setShow(true)
    }


    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to='/'>
                                Smartphone shopping
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Link to='/'>
                                    Home
                                </Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <section className="container my-4">
                <button className="btn btn-primary" onClick={createNewProduct} > add product</button>
                <div className="my-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>First Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.computers.map((computer) => {
                                return (
                                    <tr key={computer.id}>
                                        <td>{computer.id}</td>
                                        <td>{computer.name}</td>
                                        <td>
                                            <img width={100} src={computer.img} alt="" />
                                        </td>
                                        <td>{computer.price}$</td>
                                        <td>
                                            <button className="btn btn-danger mx-2" onClick={() => deleteProduct(computer.id)}>delete</button>
                                            <button className="btn btn-primary" onClick={() => editProduct(computer)}>edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </section>




            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Category"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Description"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Price"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>New</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="new"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        required
                                        type="url"
                                        placeholder="image url"
                                        defaultValue=""
                                        onChange={(e) => imageRef.current.src = e.target.value}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <img width={'150px'} ref={imageRef} src="" alt="" />
                                </Form.Group>


                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Ram</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ram"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Cpu</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Cpu"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Rom</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Rom"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Rom type</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Rom type"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Operating system</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Operating system"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom01" className="my-2">
                                    <Form.Label>Video card</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Video card"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button type="submit">Save</Button>
                        <Button type='reset' className="mx-2" variant="warning">
                            Reset
                        </Button>
                    </Form>
                </Modal.Body>
               
            </Modal>
        </>
    )
}