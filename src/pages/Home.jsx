import { Carousel, CarouselCaption, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUser, initData } from "../data-api/dataApi";
import { useState } from "react";

export default function Home() {
    initData();
    const [user, setUser] = useState(getUser());
    function showMenu() {
        if (user) {
            return (
                <Nav className="me-auto ">
                    <Nav.Link href="">
                        <Link to="/shop">
                            Shop
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="">
                        <Link to="/profile">
                            Profile
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="text-light bg-danger p-2 rounded">
                        Log out
                    </Nav.Link>
                </Nav>
            )
        } else {
            return (
                <Nav className="me-auto ">
                    <Nav.Link href="">
                        <Link to="/shop">
                            Shop
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="">
                        <Link to="/log-in">
                            Log in
                        </Link>
                    </Nav.Link>
                </Nav>
            )
        }
    }


    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="">Computer shop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {showMenu()}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <section>
                <Carousel className="bg-light-gray">
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img src="https://www.adt.az/wp-content/uploads/2022/05/Lenovo-IP3-15IIL05-Model-Noutbukk.jpg" />
                        </div>
                        <Carousel.Caption className="text-dark">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img src="https://www.adt.az/wp-content/uploads/2022/05/Lenovo-IP3-15IIL05-Model-Noutbukk.jpg" />
                        </div>
                        <Carousel.Caption className="text-dark">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img src="https://www.adt.az/wp-content/uploads/2022/05/Lenovo-IP3-15IIL05-Model-Noutbukk.jpg" />
                        </div>
                        <Carousel.Caption className="text-dark">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

        </>
    )
}