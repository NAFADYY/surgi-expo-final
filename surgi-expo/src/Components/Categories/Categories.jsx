import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Categories.css"
import Loading from '../Loading/Loading';
import showProducts from '../../../public/images/showProducts.svg'


export default function Categories() {
    const navigate = useNavigate();
    // Define categories data as state (if you want to manipulate it later)
    const [categories, setCategories] = useState([]); // State for storing the categories
    const [loading, setLoading] = useState(true); // State for loading indication
    const [error, setError] = useState(null); // State for error handling


    // useEffect to fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    "https://api.surgi-expo.com/api/categories"
                );
                setCategories(response.data.categories); // Set the categories data from the API response
                console.log(response);
            } catch (err) {
                setError(err.message); // Set error state if something went wrong
            } finally {
                setLoading(false); // Stop loading state
            }
        };

        fetchCategories();
    }, []); // Empty dependency array means this will only run once when the component mounts



    if (error) {
        return <p className='fs-1 text-center'>Error: {error}</p>
    }

    const handleNavigate = () => {
        navigate("/ProductsPage")
    }

    return (
        <>

            <div className='category'>
                <h3 className=' fw-bold mt-5 text-center'>Categories</h3>
            </div>
            {/* CATEGORIES SECTION */}

            <section className="hero-section position-relative" id="hero-section" aria-label="hero-section">


                {loading ? <Loading /> : (
                    <>
                        <div className="card-grid">
                            {categories.map((category) => (
                                <a key={category._id} className="card" href={`/subcategories/${category._id}`}>
                                    <div
                                        className="card__background"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    ></div>
                                    <div className="card__content">
                                        <h3 className="card__heading">{category.name}</h3>
                                        <p className="card__category">{category.description}</p>

                                    </div>
                                </a>
                            ))
                            }

                        </div>
                        <div className="cat-btn position-absolute">
                            <button onClick={handleNavigate}> <img src={showProducts} alt="" /></button>
                        </div>
                    </>

                )}


            </section >
        </>
    )
}


