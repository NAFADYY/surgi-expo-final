import React from 'react'
import "./Footer.css"

import footericon from '../../../public/images/Icon2.png';
import footericon2 from '../../../public/images/Icon.png';
import logo from "../../../public/images/logoFooter.png"

export default function Footer() {
    return (
        <>

            {/* FOOTER */}
            <footer className="footer text-white">

                {/* Background Image Section */}
                {/* <div
    style={{
        backgroundImage: `url('../public/images/footer.png')`, // Replace with your image URL
        height: '250px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
></div> */}

                <div className=" container-fluid">
                    <div className='col-lg-12 col-md-6 col-sm-12'>
                        <div className=" footer-logo">
                            <img src={logo} alt="Surgi Expo Logo" className="logo-img img-fluid" /> {/* Update with your logo */}
                        </div>
                    </div>

                    <div className="row">
                        {/* Left Section: Logo and Description */}
                        <div className="col-lg-4 col-md-6 col-sm-12">

                            <p className="footer-description">
                                Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.
                            </p>
                        </div>

                        {/* Middle Section: Links */}
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-around footer-links">
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Home</a></li>
                                <li><a href="/AboutUs" className="text-white">About Us</a></li>
                                <li><a href="/#category" className="text-white">Category</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="/ProductsPage" className="text-white">Product</a></li>
                                <li><a href="/contact-us" className="text-white">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Right Section: Contact Info */}
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-contact">
                            <ul className="list-unstyled">
                                {/* Email Section */}
                                <div className="d-flex align-items-start mb-4">
                                    <div>
                                        <li>
                                            <a href="mailto:info@surgi.org" className="text-white">
                                                <img src={footericon} alt="Email Icon" className="icon-img" />
                                            </a>
                                        </li>
                                    </div>
                                    <div className="text-start ps-2">
                                        <a href="mailto:info@surgi.org">
                                            Email
                                        </a>
                                        <a href="mailto:info@surgi.org" className="text-warning">
                                            <h3 className="fs-6">info@surgi.org</h3>
                                        </a>


                                    </div>
                                </div>

                                {/* Phone Section */}
                                <div className="d-flex align-items-start mb-4">
                                    <div>
                                        <li>
                                            <a href="tel:++20 1114804708" className="text-white ps-2">
                                                <img src={footericon2} alt="Phone Icon" className="icon-img" />
                                            </a>
                                        </li>
                                    </div>
                                    <div className="text-start ps-2">
                                        <h3 className="fs-5 mb-1">Phone</h3>
                                        <h3 className="fs-6 "><a href="tel:+20 1114804708" className="text-warning">+20 1114804708</a></h3>
                                    </div>
                                </div>
                            </ul>

                            {/* Social Icons */}
                            <div className="social-icons d-flex justify-content-center">
                                <a href="#linkedin" className="text-white fs-2 me-3"><i className="fab fa-linkedin"></i></a>
                                <a href="#twitter" className="text-white fs-2 me-3"><i className="fab fa-twitter"></i></a>
                                <a href="#facebook" className="text-white fs-2"><i className="fab fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr />

                    {/* Copyright Section */}
                    <div className="text-center py-2">
                        <p>Copyright © Surgi Expo | Surgi Web</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
