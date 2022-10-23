import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
  const news = useLoaderData();
  const { _id, total_view, title, details, image_url, author, category_id } =
    news;
  const { name, published_date } = author;
  return (
    <div>
      <Card className='mb-5'>
        <Card.Body>
          <Card.Img variant='top' src={image_url}></Card.Img>
          <Card.Header className='d-flex justify-content-between align-items-center p-4'>
            <p className='fw-semibold m-1'>Author Name: {name}</p>
            <p className='m-1'>Publishing Date: {published_date}</p>
            <div className='d-flex align-items-center'>
              <FaEye className='m-2'></FaEye>
              <span>{total_view}</span>
            </div>
          </Card.Header>
          <Card.Title className='pt-2'>{title}</Card.Title>

          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant='info'>Back to this category news</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
