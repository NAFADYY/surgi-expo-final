import React from 'react'
import NavigationBarPages from '../NavigationBarPages/NavigationBarPages'
import AboutUs_IMG from "../../../public/images/Images.png"
import Footer from '../Footer/Footer'
import "./AboutUs.css"
export default function AboutUs() {

    return (
        <>

            <NavigationBarPages />
            {/* ABOUT US SECTION */}
            <section className="about-us aboutus-com" id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className=" mt-4 ps-3 pe-3 mb-5 d-block d-md-none d-lg-none">
                                <img height={300} src={AboutUs_IMG} className='w-100' alt="Why Us" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text" >
                                <h3 className="heading-with-bar bg-custom-transparent ps-2">About Us</h3>
                                <blockquote className="blockquote">
                                    <p>&quot;Get ready to explore the <br /> world of commerce with the <br /> highest standards of quality.&quot;</p>
                                </blockquote>
                                <div className='desc'>
                                    <p>Surgi Expo Company was established through the efforts of a group of experts and businessmen residing in the Arab Republic of Egypt. It specializes in the fields of general trade (import, export, and international shipping) and technology. Since its founding, after being approved as an import, export, and general trade company, the company has continued to expand its activities and the services it provides in the field. General trade, import, export, land and air freight by providing all the
                                        needs of the Arab market with the best quality and most appropriate prices to achieve customer satisfaction.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <div className="image-stack top-0" >
                                <img src="images/Photo.png" alt="Image 1" className="img-fluid top-image" />
                                <img src="images/about-us-bottom.png" alt="Image 2" className="img-fluid bottom-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />


        </>
    )
}
