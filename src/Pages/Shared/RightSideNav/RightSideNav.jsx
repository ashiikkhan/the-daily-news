import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant='outline-primary' className='mb-2'>
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant='outline-primary' className='mb-2'>
          <FaFacebook></FaFacebook> Login with Facebook
        </Button>
        <Button variant='outline-dark' className='mb-2'>
          <FaGithub></FaGithub> Login with GitHub
        </Button>
      </ButtonGroup>
      <div>
        <h6>Find us on:</h6>
        <ListGroup>
          <ListGroup.Item className='mb-2' action>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className='mb-2' action>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className='mb-2' action>
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className='mb-2' action>
            <FaLinkedin></FaLinkedin> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className='mb-2' action>
            <FaYoutube></FaYoutube> Youtube
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
