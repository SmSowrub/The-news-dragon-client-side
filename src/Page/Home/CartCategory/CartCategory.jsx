import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
const CartCategory = ({ news }) => {
    const { title, details, image_url, _id, author, rating, total_view } = news;
    return (
        <div>
            <Card className="">
                <Card.Header className='d-flex align-items-center'>
                    <Image className='d-flex align-items-center' style={{ height: "44px", marginRight: '5px ' }} src={author?.img} roundedCircle />
                    <div style={{ lineHeight: '12px' }} className='flex-grow-1'>
                        <h6 className='fs-6 pt-1'>{author.name}</h6>
                        <p><small>{moment(author?.published_date).format('MMMM Do YYYY')}</small></p>
                        {/* use a mooment js in published_date */}
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex alien-items-center'>
                        <Rating className='text-warning me-2'
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                        <p className='flex-grow-1'> <small> {rating.number}</small></p>

                        <p><FaEye></FaEye> <small>{total_view}</small></p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CartCategory;