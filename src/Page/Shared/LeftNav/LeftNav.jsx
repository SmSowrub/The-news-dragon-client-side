import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QZone2 from '../QZone2/QZone2';

const LeftNav = () => {
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div style={{ height:'100vh', overflow:'scroll'}}>
            <h2>All Category</h2>
            {
                categories.map(category=> <p className='ps-4 lh-lg' key={category.id}>
                    <Link className='text-decoration-none fw-semibold text-secondary' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            <QZone2></QZone2>
        </div>
    );
};

export default LeftNav;