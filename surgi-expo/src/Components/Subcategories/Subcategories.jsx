import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Subcategories.css"
import Loading from '../Loading/Loading';
import NavigationBarPages from '../NavigationBarPages/NavigationBarPages';
import Footer from '../Footer/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Subcategories() {
    const { id } = useParams();

    const navigate = useNavigate();
    const [subcategory, setSubcategoy] = useState([]);
    const [category, setCategoy] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubcategories = async () => {
            try {
                const cat = await axios.get("https://api.surgi-expo.com/api/categories/" + id);
                setCategoy(cat.data);
                const response = await axios.get('https://api.surgi-expo.com/api/categories/sub/' + id);
                setSubcategoy(response.data.categories);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        };
        fetchSubcategories();
    }, [])

    if (loading) {
        return <Loading />; // Loading state display
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    const handleNavigate = (id) => {
        navigate(`/ProductPage/${id}`)
    }
    return (
        <>


            <NavigationBarPages />

            <div>
                <h2 className='text-center fw-bold '>{category.name}</h2>

                {/* Foodstuff 1 */}
                <div className="subCategories-container pb-5">
                    {subcategory.map((sub) => (
                        <div key={sub._id} className="box3" onClick={() => handleNavigate(sub._id)}>
                            <div className="imgBx3">
                                <LazyLoadImage src={sub.image} alt="Fruits & Vegetables" />
                            </div>
                            <div className="content">
                                <div>
                                    <h2 className='card-title py-2 text-truncate'>{sub.name}</h2>
                                    <p className='card-text py-2 text-truncate'>
                                        {sub.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>



            {/* FOOTER */}
            <Footer />

        </>
    )
}
