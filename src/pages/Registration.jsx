import { Alert, Carousel, CarouselCaption, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {  registrateUser } from "../data-api/dataApi";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function LogIn() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        id: Math.random(),
        name: "",
        surname: "",
        username: "",
        tel: "",
        password: "",
        products: []
    })
    const [successfulRegistration, setSuccessfulRegistration] = useState('')

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            event.stopPropagation();
            registration(formData)
        }
        setValidated(true);
    };
    function registration(formData) {
        const newUser = formData;
        registrateUser(newUser)
        setSuccessfulRegistration('success');
        setTimeout(() => {
            navigate("/");
        }, 4000)
    }
    function showResultOfRegistration() {
        if (successfulRegistration === 'success') {
            return (
                <Alert variant="success">
                    Successful registration
                </Alert>
            )
        } else if (successfulRegistration === 'error') {
            return (
                <Alert variant="danger">
                    Error in registration 
                </Alert>
            )
        }

    }
    return (
        <>
            <header >
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="">
                            <Link to="/">Computer shop</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto ">
                                <Link to="/" className="mx-2 p-1">
                                    Home
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <section className="container">
                <div className="col-5 m-auto">
                    <h1 className="text-center my-4">Registration</h1>
                    <div className="my-3">{showResultOfRegistration()}</div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className="my-2">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue=""
                                    value={formData.name}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02" className="my-2">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue=""
                                    value={formData.surname}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        surname: e.target.value
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom03" className="my-2">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="username"
                                    defaultValue=""
                                    value={formData.username}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        username: e.target.value
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom04" className="my-2">
                                <Form.Label>Tel</Form.Label>
                                <Form.Control
                                    required
                                    type="tel"
                                    placeholder="xxx xxx xxxx"
                                    defaultValue=""
                                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                                    value={formData.tel}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        tel: e.target.value
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom05" className="my-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="password"
                                    defaultValue=""
                                    value={formData.password}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        password: e.target.value
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                        <div className="my-4">
                            Already have an account? <Link className="btn btn-primary" to="/log-in">Log in</Link>
                        </div>
                    </Form>
                </div>

            </section>


        </>
    )
}