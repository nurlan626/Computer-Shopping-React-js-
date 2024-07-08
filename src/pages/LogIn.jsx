import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function LogIn() {
    const [validated, setValidated] = useState(false);
    const [successLogIn, setSuccessLogIn] = useState('')
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            event.stopPropagation();

            console.log(formData)
            logIn(formData)

        }

        setValidated(true);
    };
    function logIn(formData) {
        setSuccessLogIn('error');
        setTimeout(() => {
            navigate("/");
        }, 4000)

    }
    function showResultOfLogIn() {
        if (successLogIn === 'success') {
            return (
                <Alert variant="success">
                    Successful log in
                </Alert>
            )
        } else if (successLogIn === 'error') {
            return (
                <Alert variant="danger">
                    Log in error
                </Alert>
            )
        }

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
                                <Nav.Link>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <section>

                <div className="col-5 m-auto">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <h1 className="text-center">Log in</h1>
                            <div className="my-3">{showResultOfLogIn()}</div>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername" className="my-2">
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

                            <Form.Group as={Col} md="12" controlId="validationCustomPassword" className="my-2">
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

                        <Button type="submit">Submit</Button>
                        <div className="my-4">
                        Don't have an account? <Link className="btn btn-primary" to="/registration">Registration</Link>
                        </div>
                    </Form>
                </div>

            </section>
        </>
    )
}