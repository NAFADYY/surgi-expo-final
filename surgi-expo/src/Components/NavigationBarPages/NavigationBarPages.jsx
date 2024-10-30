import React, { useEffect, useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../public/images/logoNav.png'
import "./NavigationBarPages.css"

export default function NavigationBarPages() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Navbar
                expand="lg"
                fixed="top"
                className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
            >
                <div className="container">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Surgi Expo" width="250" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-right p-3 fs-4">  {/* Custom CSS class for aligning right */}
                            <Nav.Link href="/" className={scrolled ? 'nav-link-scrolled' : ''}>Home</Nav.Link>
                            <Nav.Link href="/AboutUs" className={scrolled ? 'nav-link-scrolled' : ''}>About Us</Nav.Link>
                            <Nav.Link href="/#category" className={scrolled ? 'nav-link-scrolled' : ''}>Category</Nav.Link>
                            <Nav.Link href="/ProductsPage" className={scrolled ? 'nav-link-scrolled' : ''}>Product</Nav.Link>
                            <Nav.Link href="/contact-us" className={scrolled ? 'nav-link-scrolled' : ''}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}
