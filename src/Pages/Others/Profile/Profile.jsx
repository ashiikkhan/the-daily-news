import React, { useContext } from 'react';
import { Card, Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className='w-50'>
        <Card className='bg-dark text-black'>
          <Card.Img src={user.photoURL} alt='Card image' />
          <Card.ImgOverlay>
            <Card.Title>{user.displayName}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
