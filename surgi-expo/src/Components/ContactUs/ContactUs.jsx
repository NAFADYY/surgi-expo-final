import React from 'react'
import "./ContactUs.css"
import NavigationBarPages from '../NavigationBarPages/NavigationBarPages'
import Footer from '../Footer/Footer'

export default function ContactUs() {

    return (
        <>

            <NavigationBarPages />
            {/* CONTACT US SECTION */}
            <div id='contact-us' className=' pt-5'>
                <div className="container my-5">
                    <div className="row align-items-center">
                        {/* Left Section: Contact Info */}
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <h3 className="heading-with-bar bg-custom-transparent ps-2">Contact Us
                                </h3>
                            </div>
                            <h2>Get In Touch With Us</h2>
                            <p>
                                For more information about our products & services, please feel free to drop us an email. Our staff will
                                always be there to help you out. Do not hesitate!
                            </p>

                            {/* Address Section */}
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-geo-alt-fill fs-2"></i>
                                <div className="ms-3">
                                    <h5 className="mb-0 pt-5">Address</h5>
                                    <p>
                                        Al Sahaba Al Keram, <br /> Al Manteqah Ath Thamenah,<br /> Nasr City, Cairo Governorate 4441302
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Image */}
                        <div className="col-lg-4 m-auto">
                            <img src="images/contact.png" alt="Contact" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row align-items-start">
                        {/* Left Section: Contact Info */}
                        <div className="col-lg-6">
                            {/* Phone Section */}
                            <div className="mb-4 contact-info-item">
                                <i className="bi bi-telephone-fill fs-3"></i>
                                <div className="ms-3">
                                    <h5>Phone</h5>
                                    <p>
                                        <a href="tel:+20 1114804708" className="text-danger">
                                            +20 1114804708
                                        </a>
                                        <br />
                                        <a href="tel:+20 1112077758" className="text-danger">
                                            +20 1112077758
                                        </a>
                                        <br />
                                        <a href="tel:+20 1099758866" className="text-danger">
                                            +20 1099758866
                                        </a>

                                    </p>
                                </div>
                            </div>

                            {/* Email Section */}
                            <div className="mb-4 contact-info-item">
                                <i className="bi bi-envelope-fill fs-3"></i>
                                <div className="ms-3">
                                    <h5>Email</h5>
                                    <p>
                                        <a href="mailto:info@surgi.org" className="text-danger">
                                            info@surgi.org
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Working Time Section */}
                            <div className="contact-info-item">
                                <i className="bi bi-clock-fill fs-3"></i>
                                <div className="ms-3">
                                    <h5>Working Time</h5>
                                    <p>
                                        Monday–Friday: 9:00 – 22:00
                                        <br />
                                        Saturday–Sunday: 9:00 – 21:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Google Map */}
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.042324652761!2d31.344787184885064!3d30.035643581885505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzA4LjMiTiAzMcKwMjAnMzMuNCJF!5e0!3m2!1sar!2seg!4v1728567518735!5m2!1sar!2seg"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>


                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
