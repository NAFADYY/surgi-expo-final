import React, { useEffect } from 'react'
import AOS from 'aos';
// import '..//node_modules/aos/dist/aos.css';
import '../../../node_modules/aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap
import 'font-awesome/css/font-awesome.min.css';  // FontAwesome

import { useLocation } from 'react-router-dom';
import "./home.css"

import rafat from '../../../public/images/dr-rafatf.jpeg'
import doha from '../../../public/images/dohaf.jpeg'
import nour from '../../../public/images/nourf.png'

import logo from "../../../public/images/logoFooter.png"

import AboutUs_IMG from "../../../public/images/Images.png"


import footericon from '../../../public/images/Icon2.png'
import footericon2 from '../../../public/images/Icon.png'
import NavigationBar from '../NavigationBar/NavigationBar';
import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';


import { Helmet } from 'react-helmet';



export default function Home() {

    <Helmet>
        <title>Surgi Expo</title>
        <meta name="description" content="Your safe gateway
          for exporting
          high-quality products." />
        <meta name="keywords" content="Export, expotaion, surgi, surgi expo" />
        <link rel="canonical" href="https://surgi-expo.com/" />
    </Helmet>

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            {/* NAVBAR */}


            <NavigationBar />
            <Hero />


            <Categories />

            {/* ABOUT US SECTION */}
            <section className="about-us mt-5" id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className=" mt-4 ps-3 pe-3 mb-5 d-block d-md-none d-lg-none">
                                <img height={300} src={AboutUs_IMG} className='w-100' alt="surgi expo about us" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text" data-aos="zoom-in">
                                <h3 className="heading-with-bar bg-custom-transparent ps-2">About Us</h3>
                                <blockquote className="blockquote">
                                    <p>&quot;Get ready to explore the <br /> world of commerce with the highest standards of quality.&quot;</p>
                                </blockquote>
                                <div className='desc'>
                                    <p>Surgi Expo Company was established through the efforts of a group of experts and businessmen residing in the Arab Republic of Egypt. It specializes in the fields of general trade (import, export, and international shipping) and technology. Since its founding, after being approved as an import, export, and general trade company, the company has continued to expand its activities and the services it provides in the field. General trade, import, export, land and air freight by providing all the
                                        needs of the Arab market with the best quality and most appropriate prices to achieve customer satisfaction.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <div className="image-stack top-0" data-aos="zoom-in">
                                <img src="images/Photo.png" alt="Image 1" className="img-fluid top-image" />
                                <img src="images/about-us-bottom.png" alt="Image 2" className="img-fluid bottom-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* why us */}
            <section className="pt-5">
                <div className="why-us mt-md-5 why-us-bg w-100 position-absolute">
                </div>
                <div className="container h-100   w-md-75  p-md-5 mt-5 m-auto">
                    <div className="row bg-white mt-5 pt-md-5 pe-md-5 ps-md-5 why-us-content position-relative ">
                        <div className="">
                            <div data-aos="flip-right" data-aos-duration="3000" className=" mt-4 ps-3 pe-3 d-block d-lg-none">
                                <img height={250} src="images/why-us-photo.png" className='w-100' alt="Why Us" />
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="col-lg-6 ps-md-5 mt-5">
                            <div data-aos="fade-down-right" data-aos-duration="3000">
                                <h3 className="heading-with-bar bg-custom-transparent ps-2">Why Us</h3>
                                <h4 className="why-us-title">
                                    Surgi has adopted Quality <br /> Production as its basic <br />principle.
                                </h4>
                                <p className='why-us-desc'>

                                    To be one of the pioneering, dynamic and leading companies <br /> that offer quality products and services with an <br /> understanding of continuous improvement in <br /> the fields in which it operates.

                                </p>
                                {/* <a href="#" className="text-decoration-underline text-dark fw-bold">
                                    Quality Certificates
                                </a> */}
                            </div>
                        </div>
                        {/* Images */}
                        <div className="col-lg-6 ps-5">
                            <div data-aos="flip-right" data-aos-duration="3000" className="ps-5 ms-5  d-none d-lg-block">
                                <img height={400} src="images/why-us-photo.png" alt="Why Us" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* VISION SECTION */}
            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div data-aos="zoom-in" className="image-stack top-0 p-2 p-md-5">
                                <img src="images/expo-vision.png" alt="Image 1" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5">
                            <div className="about-text" data-aos="zoom-in">
                                <h3 className="heading-with-bar mt-5 bg-custom-transparent ps-2">Our Vision</h3>
                                <blockquote className="blockquote">
                                    <p>&quot;Pioneering Excellence in Global Export Services&quot;</p>
                                </blockquote>
                                <p className='vision-desc'>Our vision is to lead the world in export services by providing reliable, efficient, and innovative solutions <br /> that drive international trade. We are committed to connecting
                                    businesses across borders with precision and professionalism, ensuring smooth operations and sustainable growth in every transaction." This version emphasizes
                                    reliability, efficiency, and professionalism, which are key attributes for a company in the export industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION SECTION */}
            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-block d-lg-none">
                            <div className="image-stack ps-md-5 top-0" data-aos="fade-down">
                                <img src="images/expo-mission.png" alt="Image 1" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text pe-5" data-aos="fade-up">
                                <h3 className="heading-with-bar bg-custom-transparent mt-5 ps-2">Our Mission</h3>
                                <blockquote className="blockquote">
                                    <p>&quot;Delivering Seamless Export Solutions Worldwide&quot;</p>
                                </blockquote>
                                <p className='misission-desc'>Our mission is to offer comprehensive global export services, ensuring the efficient and timely delivery of top-quality products to meet the diverse demands of our international clients. We strive to simplify the complexities of cross-border trade, providing tailored solutions that guarantee reliability, trust, and exceptional service in every shipment." This structure aligns with the vision format
                                    and emphasizes the key attributes of efficiency, quality, and reliability in export services.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="image-stack ps-md-5 top-0" data-aos="fade-down">
                                <img src="images/expo-mission.png" alt="Image 1" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section data-aos="zoom-in" className="team-section">
                <div className="container">
                    <h2>Meet Expert Team</h2>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card1 team-card1">
                                <img className="w-100" src={rafat} alt="Dr rafat" />
                                <div className="card-body d-flex justify-content-start ps-5 text-left pt-3 ">
                                    <h5 className="card-title">Dr.Rafat Ramses</h5>

                                </div>
                                <div className="card-body align-items-center d-flex justify-content-around text-left pt-1">
                                    <p className="card-text text-warning">Chairman Group</p>
                                    <div className="social-icons1">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card1 team-card1">
                                <img className="w-100" src={doha} alt="Doha" />
                                <div className="card-body d-flex justify-start text-left pt-3 ps-5">
                                    <h5 className="card-title">Ms.Doha Elhamy</h5>

                                </div>
                                <div className="card-body d-flex justify-content-around text-left pt-1">
                                    <p className="card-text text-warning">Export Manager</p>
                                    <div className="social-icons1">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card1 team-card1">
                                <img className="w-100" src={nour} alt="nourhan" />
                                <div className="card-body d-flex justify-content-start text-left pt-3 ps-5">
                                    <h5 className="card-title">Ms.Nourhan Elkady</h5>

                                </div>
                                <div className="card-body d-flex justify-content-around text-left pt-1">
                                    <p className="card-text text-warning ps-2">RealEstate Manager</p>
                                    <div className="social-icons1">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div id='contact-us'></div>
                        </div>

                        {/* Add more team members similarly */}
                    </div>

                </div>
            </section>

            {/* CONTACT US SECTION */}
            <div >
                <div className="container my-5">
                    <div className="row align-items-center ">
                        {/* Left Section: Contact Info */}
                        <div data-aos="zoom-in" className="col-lg-6">
                            <div className="mb-3">
                                <h3 className="heading-with-bar bg-custom-transparent ps-2">Contact Us
                                </h3>
                            </div>
                            <h2>Get In Touch With Us</h2>
                            <p className='contact-Us'>
                                For more information about our products & services, please feel free to drop us an email. Our staff will
                                always be there to help you out. Do not hesitate!
                            </p>

                            {/* Address Section */}
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-geo-alt-fill fs-2"></i>
                                <div className="ms-3">
                                    <h5 className="mb-0 pt-5 fw-bold">Address</h5>
                                    <p>
                                        <a className=' text-decoration-none text-danger' href="https://www.google.com/maps/place/Al+Sahaba+Al+Keram,+Nasr+City,+Cairo+Governorate/@30.0358364,31.342842,18.4z/data=!4m6!3m5!1s0x14583e9ab2882529:0xd8e4c8d2ba5a7529!8m2!3d30.0359457!4d31.3431648!16s%2Fg%2F1tf91pgw?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D">
                                            Al Sahaba Al Keram,<br />
                                            Al Manteqah Ath Thamenah, <br />
                                            Nasr City, Cairo Governorate 4441302
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Image */}
                        <div data-aos="zoom-in" className="col-lg-4 m-auto">
                            <img src="images/contact.png" alt="Contact" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" className="container my-5">
                    <div className="row align-items-start">
                        {/* Left Section: Contact Info */}
                        <div className="col-lg-6">
                            {/* Phone Section */}
                            <div className="mb-4 contact-info-item">
                                <i className="bi bi-telephone-fill fs-3"></i>
                                <div className="ms-3">
                                    <h5 className=' fw-bold'>Phones</h5>
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
                                    <h5 className=' fw-bold'>Email</h5>
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
                                    <h5 className='fw-bold'>Working Time</h5>
                                    <p>
                                        Sunday–Thursday: 10:00 – 18:00
                                        <br />
                                        Saturday–Sunday: 10:00 – 18:00
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

            {/* FOOTER */}


            <footer className="footer text-white">

                {/* Background Image Section */}
                <div
                    style={{
                        backgroundImage: `url('images/footer.png')`, // Replace with your image URL
                        height: '250px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

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
                                <li><a href="#about-us" className="text-white">About Us</a></li>
                                <li><a href="#category" className="text-white">Category</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="/ProductsPage" className="text-white">Product</a></li>
                                <li><a href="#contact-us" className="text-white">Contact Us</a></li>
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
