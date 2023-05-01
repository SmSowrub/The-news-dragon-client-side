import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CartCategory from '../CartCategory/CartCategory';

const Category = () => {
    const {id}=useParams();
    const CategoryNews =useLoaderData()
    console.log(CategoryNews);
    return (
        <div>

            <h3>this is category:{CategoryNews.length}</h3>
            {
                CategoryNews.map(news=> <CartCategory key={news.id} news={news}></CartCategory>)
            }
        </div>
    );
};

export default Category;