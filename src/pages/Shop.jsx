import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Modal, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        getBrand();  // Вызов функции для получения брендов при загрузке компонента
        const phoneList = getPhones();  // Получение списка телефонов
        setPhones(phoneList);  // Установка начального списка телефонов
        setFilterPhones(phoneList);  // Установка начального отфильтрованного списка телефонов
    }, []);

    function getBrand() {
        const phoneBrands = [
            "Apple",
            "Samsung",
            "Huawei",
            "Xiaomi",
            "OnePlus",
            "Nokia",
            "Sony",
            "LG",
            "Motorola",
            "Google",
            "Oppo",
            "Vivo",
            "Realme",
            "Asus",
            "ZTE",
            "Lenovo",
            "HTC",
            "Meizu",
            "Honor",
            "BlackBerry"
        ];

        setBrands(phoneBrands);  // Установка списка брендов в состояние
    }

    function getPhones() {
        const newPhones = [
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "ACER",
                description: "some text",
                price: 750,
                new: "yes",
                telefon: "055 555 55 55"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Samsung",
                description: "another text",
                price: 1200,
                new: "no",
                telefon: "055 666 66 66"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Apple",
                description: "more text",
                price: 1500,
                new: "yes",
                telefon: "055 777 77 77"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Huawei",
                description: "sample text",
                price: 800,
                new: "no",
                telefon: "055 888 88 88"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Xiaomi",
                description: "example text",
                price: 600,
                new: "yes",
                telefon: "055 999 99 99"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "OnePlus",
                description: "demo text",
                price: 900,
                new: "yes",
                telefon: "055 111 11 11"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Nokia",
                description: "text here",
                price: 500,
                new: "no",
                telefon: "055 222 22 22"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Sony",
                description: "another example",
                price: 1100,
                new: "yes",
                telefon: "055 333 33 33"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "LG",
                description: "sample description",
                price: 950,
                new: "no",
                telefon: "055 444 44 44"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Motorola",
                description: "test text",
                price: 700,
                new: "yes",
                telefon: "055 555 55 56"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Google",
                description: "some other text",
                price: 1300,
                new: "no",
                telefon: "055 666 66 67"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Oppo",
                description: "yet another text",
                price: 750,
                new: "yes",
                telefon: "055 777 77 78"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Vivo",
                description: "text sample",
                price: 850,
                new: "no",
                telefon: "055 888 88 89"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Realme",
                description: "example description",
                price: 650,
                new: "yes",
                telefon: "055 999 99 90"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Asus",
                description: "description text",
                price: 1050,
                new: "no",
                telefon: "055 111 11 12"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "ZTE",
                description: "another sample",
                price: 700,
                new: "yes",
                telefon: "055 222 22 23"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Lenovo",
                description: "sample text again",
                price: 950,
                new: "no",
                telefon: "055 333 33 34"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "HTC",
                description: "yet another example",
                price: 780,
                new: "yes",
                telefon: "055 444 44 45"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Meizu",
                description: "some random text",
                price: 670,
                new: "no",
                telefon: "055 555 55 46"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH056KsHdzeq0cHV6qnkXN7T2yrORts-1YIF4_6wkNIxJ6yQcAwGOBHplUFU3yUcX7ks&usqp=CAU",
                name: "Honor",
                description: "final example",
                price: 890,
                new: "yes",
                telefon: "055 666 66 47"
            }
        ];
        return newPhones;
    }

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
                    <div className="col-3">
                        <Form.Control className="my-2" onChange={filterPhonesByText} size="md" type="text" placeholder="Search" />
                        <ListGroup className="my-3">
                            {brands.map((brand, index) => (
                                <ListGroup.Item key={index} onClick={() => filterPhonesByBrand(brand)}>
                                    {brand}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col-9">
                        <Row xs={2} md={5} className="g-4">
                            {filterPhones.map((phone, index) => (
                                <Col key={index}>
                                    <Card>
                                        <Card.Img variant="top" src={phone.img} />
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
                            <img src={phoneInfoInModal.img} alt="" />
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
