import { Carousel, CarouselCaption, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserData, initData, logOut } from "../data-api/dataApi";
import { useEffect, useState } from "react";

export default function Home() {
    const [user, setUser] = useState();
    
    function logOutUser() {
        logOut();
        setUser(null)
    }
    useEffect(() => {
        initData();
        setUser(getUserData())
    }, [])
  

    function showMenu() {
        if (user) {
            return (
                <Nav className="me-auto ">
                    <Link to="/" className="mx-2 p-1">
                        Home
                    </Link>
                    <Link to="/shop" className="mx-2 p-1">
                        Shop
                    </Link>
                    <Link to="/profile" className="mx-2 p-1">
                        Profile
                    </Link>
                    <Link onClick={logOutUser} className="text-light bg-danger p-1 rounded">
                        Log out
                    </Link>
                </Nav>
            )
        } else {
            return (
                <Nav className="me-auto ">
                    <Link to="/" className="mx-2 p-1">
                        Home
                    </Link>
                    <Link to="/shop" className="mx-2 p-1">
                        Shop
                    </Link>
                    <Link to="/log-in" className="mx-2 p-1">
                        Log in
                    </Link>

                </Nav>
            )
        }
    }
    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="">
                            <Link to="/">Computer shop</Link>
                        </Navbar.Brand>
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