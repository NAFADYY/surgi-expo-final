import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import NavigationBarPages from '../NavigationBarPages/NavigationBarPages';
import "./ProductPage.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer';

export default function ProductPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  // State for pagination
    const [totalPages, setTotalPages] = useState(1);    // Total pages

    const productsPerPage = 8; // Number of products per page

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://api.surgi-expo.com/api/products?category=${id}&page=${currentPage}&limit=${productsPerPage}`);
                setProducts(response.data.products);
                setTotalPages(response.data.paginationResult.numberOfPages)
                console.log(response);

            } catch (err) {
                setError(err.message)
            } finally {
                setloading(false);
            }
        }

        fetchProducts();
    }, [currentPage, id])

    if (loading) {
        return <Loading />; // Loading state display
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNavigate = (id) => {
        navigate(`/ProductDetails/${id}`)
    }
    return (
        <>
            {/* NAVBAR */}
            <NavigationBarPages />

            <div className="header-section1">
                <div className="overlay1">
                    <h1 className="header-title1">Product</h1>
                    <p className="breadcrumb1">
                        Home &gt; Category &gt; <span className="current-page">Product</span>
                    </p>
                </div>
            </div>


            <div className="container py-5">
                <div className="row">
                    {products.map((product) => (

                        <div className="col-md-3 mb-4" key={product._id} onClick={() => handleNavigate(product._id)}>
                            <div className="card3">
                                <div className="imgBx1">
                                    <LazyLoadImage
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

                {/* Pagination (Optional) */}

                <div aria-label="Page navigation example">
                    <div className="container-fluid">
                        <ul className="pagination justify-content-center flex-wrap">
                            {(currentPage !== 1) && (
                                <li className="page-item">
                                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                        prev
                                    </button>
                                </li>
                            )}
                            {[...Array(totalPages).keys()].map((_, idx) => (
                                <li className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`} key={idx}>
                                    <button className="page-link" onClick={() => handlePageChange(idx + 1)}>
                                        {idx + 1}
                                    </button>
                                </li>
                            ))}
                            {currentPage < totalPages && (
                                <li className="page-item">
                                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                        Next
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>


            {/* FOOTER */}


            <Footer />
        </>
    )
}
