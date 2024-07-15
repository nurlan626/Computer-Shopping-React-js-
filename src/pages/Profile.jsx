import { useEffect, useRef, useState } from "react";
import { Button, Container, Form, InputGroup, Modal, Nav, Navbar, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserData } from "../data-api/dataApi";
import Col from 'react-bootstrap/Col';

export default function Profile() {
    const [user, setUser] = useState();
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const imageRef = useRef();

    useEffect(() => {
        setUser(getUserData());
    }, [])

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Add or edit the product based on currentProduct state
            if (currentProduct.id) {
                // Edit existing product
                const updatedComputers = user.computers.map(computer =>
                    computer.id === currentProduct.id ? currentProduct : computer
                );
                setUser({ ...user, computers: updatedComputers });
            } else {
                // Add new product
                const newProduct = { ...currentProduct, id: user.computers.length + 1 };
                setUser({ ...user, computers: [...user.computers, newProduct] });
            }
            handleClose();
        }
        setValidated(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentProduct({ ...currentProduct, [name]: value });
        if (name === "img") {
            imageRef.current.src = value;
        }
    };

    const deleteProduct = (id) => {
        const updatedComputers = user.computers.filter(computer => computer.id !== id);
        setUser({ ...user, computers: updatedComputers });
    };

    const editProduct = (product) => {
        setCurrentProduct(product);
        setShow(true);
    };

    const createNewProduct = () => {
        setCurrentProduct({});
        setShow(true);
    };

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
                <Button className="btn btn-primary" onClick={createNewProduct}>Add Product</Button>
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
                            {console.log(user)}
                            {user.products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>
                                        <img width={100} src={product.img} alt="" />
                                    </td>
                                    <td>{computer.price}$</td>
                                    <td>
                                        <Button className="btn btn-danger mx-2" onClick={() => deleteProduct(product.id)}>Delete</Button>
                                        <Button className="btn btn-primary" onClick={() => editProduct(product)}>Edit</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </section>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentProduct.id ? "Edit Product" : "New Product"}</Modal.Title>
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
                                        name="category"
                                        value={currentProduct.category || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom02" className="my-2">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={currentProduct.name || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom03" className="my-2">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Description"
                                        name="description"
                                        value={currentProduct.description || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom04" className="my-2">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Price"
                                        name="price"
                                        value={currentProduct.price || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom05" className="my-2">
                                    <Form.Label>New</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="New"
                                        name="new"
                                        value={currentProduct.new || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom06" className="my-2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        required
                                        type="url"
                                        placeholder="Image URL"
                                        name="img"
                                        value={currentProduct.img || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <img width={'150px'} ref={imageRef} src={currentProduct.img || ""} alt="" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="validationCustom07" className="my-2">
                                    <Form.Label>Ram</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ram"
                                        name="ram"
                                        value={currentProduct.ram || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom08" className="my-2">
                                    <Form.Label>Cpu</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Cpu"
                                        name="cpu"
                                        value={currentProduct.cpu || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom09" className="my-2">
                                    <Form.Label>Rom</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Rom"
                                        name="rom"
                                        value={currentProduct.rom || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom10" className="my-2">
                                    <Form.Label>Rom Type</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Rom Type"
                                        name="romType"
                                        value={currentProduct.romType || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom11" className="my-2">
                                    <Form.Label>Operating System</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Operating System"
                                        name="os"
                                        value={currentProduct.os || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom12" className="my-2">
                                    <Form.Label>Video Card</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Video Card"
                                        name="videoCard"
                                        value={currentProduct.videoCard || ""}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button type="submit">Save</Button>
                        <Button type="reset" className="mx-2" variant="warning" onClick={() => setCurrentProduct({})}>Reset</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
