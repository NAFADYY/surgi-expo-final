import React, { useEffect, useState } from 'react'
import "./hero.css";
import buttonMore from "../../../public/images/exploreMore.svg"
import buttonLess from "../../../public/images/exploreLess.svg"
import { useLocation } from 'react-router-dom';


export default function Hero() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    const [click, setClick] = useState(false);
    const handleClickButton = (bol) => {
        setClick(bol);
    }
    return (
        <>
            <div className="hero-section1" id='home'>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">SURGI EXPO</h1>
                        <p className="tagline heading-with-bar ms-3">Export to all over the world</p>
                        <h3 className="hero-description">
                            Your safe gateway <br /> for exporting <br /> high-quality products.
                        </h3>
                        <p className="hero-text1">
                            A leading company in the field of export and international trade based in China,
                            providing commercial and consulting services in addition to technical services.
                        </p>
                        {click && (
                            <>
                                <p className="hero-text1">
                                    Export companies also face challenges such as navigating complex customs systems, currency fluctuations, and meeting international quality standards. However, through strategic planning and strong partnerships, these companies can achieve significant success and contribute to the growth of national exports.
                                </p>
                                <button onClick={() => handleClickButton(false)} className="">
                                    <img src={buttonLess} alt="" />

                                </button>
                            </>
                        )}

                        {(!click) && (
                            <button onClick={() => handleClickButton(true)} className="">
                                <img src={buttonMore} alt="" />
                            </button>

                        )}

                        <div id='category'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

