import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
  console.log(news);
  const { _id, total_view, rating, title, details, image_url, author } = news;
  const { img, name, published_date } = author;

  return (
    <div>
      <Card className='mb-5'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-between align-items-center'>
            <Image
              src={img}
              roundedCircle
              style={{ width: '3rem' }}
              className='me-2'></Image>
            <div>
              <p className='fw-semibold m-1'>{name}</p>
              <p className='m-1'>Published: {published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark className='m-2'></FaBookmark>
            <FaShareAlt className='m-2'></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant='top' src={image_url}></Card.Img>
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + '...'}{' '}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>
                {details} <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <FaStar className='text-warning m-2'></FaStar>
            {rating.number}
          </div>
          <div className='d-flex align-items-center'>
            <FaEye className='m-2'></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
