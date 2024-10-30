import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import "./Productdetails.css"
import Footer from '../Footer/Footer';

import buttonMore from "../../../public/images/exploreMore.svg"
import logo from '../../../public/images/logoNav.png'




export default function Productdetails() {
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

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true); // Renamed to lowercase
    const [error, setError] = useState(null); // Also, use lowercase for 'error'

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://api.surgi-expo.com/api/products/${id}`);
                setProduct(response.data);

                const categoryId = response.data.category._id;
                const res = await axios.get(`https://api.surgi-expo.com/api/products?category=${categoryId}&limit=4`);
                setProducts(res.data.products);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleNavigate = (id) => {
        navigate(`/ProductDetails/${id}`);
    };

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {/* NAVBAR */}
                    <Navbar
                        expand="lg"
                        fixed="top"
                        className={`bg-custom p-3 custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
                    >
                        <div className="container">
                            <Navbar.Brand href="#home">
                                <img src={logo} alt="Surgi Expo" width="250" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="nav-right">
                                    <Nav.Link href="/" className={scrolled ? 'nav-link-scrolled' : ''}>Home</Nav.Link>
                                    <Nav.Link href="/AboutUs" className={scrolled ? 'nav-link-scrolled' : ''}>About Us</Nav.Link>
                                    <Nav.Link href="/#category" className={scrolled ? 'nav-link-scrolled' : ''}>Category</Nav.Link>
                                    <Nav.Link href="/ProductsPage" className={scrolled ? 'nav-link-scrolled' : ''}>Product</Nav.Link>
                                    <Nav.Link href="/contact-us" className={scrolled ? 'nav-link-scrolled' : ''}>Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>

                    {/* Breadcrumb */}
                    <div aria-label="breadcrumb" className="breadcrumb-container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/" className="breadcrumb-link">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href={`/subcategories/${product.category.parentId._id}`} className="breadcrumb-link">Category</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href={`/ProductPage/${product.category._id}`} className="breadcrumb-link">Product</a>
                            </li>
                            <li className="breadcrumb-item breadcrumb-bold" aria-current="page">
                                <span className='fw-normal'>|</span> {product.title}
                            </li>
                        </ol>
                    </div>

                    {/* Product Details */}
                    <Container className="product-details py-1">
                        <Row>
                            {/* Main product image */}
                            <Col md={4} xs={12} className="order-md-2">
                                <Image src={product.imgCover} fluid className="main-product-image w-100 mt-5" />
                            </Col>

                            {/* Image gallery */}
                            <Col md={1} xs={3} className="image-gallery mt-5 order-md-1">
                                <div className="image-gallery-items d-md-block d-flex flex-row flex-md-column">
                                    {product.images?.map((img, index) => (
                                        <Image key={index} src={img} className="img-thumbnail mb-2" />
                                    ))}
                                </div>
                            </Col>

                            {/* Product details */}
                            <Col md={6} xs={12} className="product-info ms-md-5 mt-5 order-md-3">
                                <h3 className="fw-bold product-title">{product.title}</h3>
                                <div
                                    className="product-features fw-bold"
                                    dangerouslySetInnerHTML={{ __html: product.brief }}
                                ></div>

                                {/* Contact */}
                                <div className='d-md-flex'>
                                    <p className="order-product">
                                        To order the product :
                                        <span className='fw-normal ps-2 pe-5'>Contact us</span>
                                        <span className='fs-4 pe-3'><i className="fa-solid fa-envelope-open-text"></i></span>
                                    </p>
                                    <p className='pt-3'>
                                        <strong>EMAIL:</strong> <br /> <span className='text-warning'> <a href="mailto:info@surgi.org" className="text-warning">
                                            info@surgi.org
                                        </a></span>
                                    </p>
                                </div>

                                <hr />

                                {/* Category */}
                                <p className=' text-secondary fw-bold'><strong className='pe-3'>Category:</strong> {product.category.parentId.name}</p>
                                <p className=' text-secondary  fw-bold '><strong className='pe-3'>SubCategory:</strong> {product.category.name}</p>

                                {/* Share */}
                                <div className='d-flex'>
                                    <div>
                                        <p className='fw-bold pe-5 pt-2'>Share:</p>
                                    </div>
                                    <div className="social-share">
                                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <hr className='mt-md-5' />

                        {/* Description */}
                        <div className="description-section text-center">
                            <div className="w-75 m-auto">
                                <h3 className='fw-bold'>Description</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>

                        <hr className='mb-md-3' />
                    </Container>

                    {/* Related Products */}
                    <Container className='Related-products'>
                        <h3 className='text-center fw-bolder pt-3'>Related Products</h3>
                        <div className="container py-5">
                            <div className="row">
                                {products.map((product) => (
                                    <div className="col-md-3 mb-4" key={product._id} onClick={() => handleNavigate(product._id)}>
                                        <div className="card3">
                                            <div className="imgBx1">
                                                <img
                                                    src={product.imgCover}
                                                    className="card-img-top w-100"
                                                    alt={product.title}
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title py-2 text-truncate">{product.title}</h5>
                                                {product.category.name && <h6 className='py-2'>{product.category.name}</h6>}
                                                {product.description && <p className="card-text py-2 text-truncate">{product.description}</p>}
                                                {product.discount && (
                                                    <span className="badge badge-danger">{product.discount}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='text-center mt-4'>
                                <a href={`/ProductPage/${product.category._id}`} className="">
                                    <img src={buttonMore} alt="" />
                                </a>
                            </div>
                        </div>
                    </Container>
                    <Footer />

                </>
            )}
        </>
    )
}
