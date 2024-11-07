import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Modal, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllBrands, getAllProducts } from "../data-api/dataApi";

export default function Shop() {
    const [brands, setBrands] = useState([]);
    const [phones, setPhones] = useState([]);
    const [filterPhones, setFilterPhones] = useState([]);


    const [show, setShow] = useState(false);
    const [phoneInfoInModal, setPhoneInfoInModal] = useState({
        img: "",
        name: "",
        description: "",
        price: "",
        new: "",
        telefon: "",
    })

    const handleClose = () => setShow(false);
    const handleShow = (info) => {
        setShow(true);
        setPhoneInfoInModal({
            ...info
        })
    }

    useEffect(() => {
        setBrands(getAllBrands())
        setPhones(getAllProducts);  // Установка начального списка телефонов
        setFilterPhones(getAllProducts);  // Установка начального отфильтрованного списка телефонов
    }, []);



    function filterPhonesByBrand(brand) {
        setFilterPhones(phones.filter(phone => phone.name.toLowerCase().includes(brand.toLowerCase())));
    }

    function filterPhonesByText(e) {
        const searchText = e.target.value.toLowerCase();
        setFilterPhones(phones.filter(phone => phone.name.toLowerCase().includes(searchText)));
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
            <section className="my-3">
                <div className="container row m-auto">
                    <div className="col-2">
                        <Form.Control className="my-2" onChange={filterPhonesByText} size="md" type="text" placeholder="Search" />
                        <ListGroup className="my-3">
                                  <ListGroup.Item onClick={() => setFilterPhones(getAllProducts())}>
                                    All
                                </ListGroup.Item>
                            {brands.map((brand, index) => (
                                <ListGroup.Item key={index} onClick={() => filterPhonesByBrand(brand)}>
                                    {brand}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-10">
                        <Row xs={2} md={5} className="g-2">
                            {filterPhones.map((phone, index) => (
                                <Col key={index}>
                                    <Card>
                                        <Card.Img variant="top" src={phone.img} className="p-2" />
                                        <Card.Body>
                                            <Card.Text>
                                                <div>name: {phone.name}</div>
                                                <div>description: {phone.description}</div>
                                                <div>price: {phone.price}</div>
                                                <div>new: {phone.new}</div>
                                                <div>telefon: {phone.telefon}</div>
                                            </Card.Text>
                                            <div className="text-center">

                                                <Button variant="primary m-auto" onClick={() => handleShow(phone)}>
                                                    more info
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Full info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="text-center" >
                            <img width='100%' src={phoneInfoInModal.img} alt="" />
                        </div>

                        <div className="row my-4">
                            <div className="col">
                                name: {phoneInfoInModal.name} <br />
                                description:  {phoneInfoInModal.description} <br />
                                price:  {phoneInfoInModal.price} <br />
                                new:  {phoneInfoInModal.new} <br />
                                telefon:  {phoneInfoInModal.telefon} <br />
                            </div>
                            <div className="col">
                                name: {phoneInfoInModal.name} <br />
                                description:  {phoneInfoInModal.description} <br />
                                price:  {phoneInfoInModal.price} <br />
                                new:  {phoneInfoInModal.new} <br />
                                telefon:  {phoneInfoInModal.telefon} <br />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}
