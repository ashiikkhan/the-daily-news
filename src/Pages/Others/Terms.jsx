import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h3>Here is our trerms and conditions: </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta
        placeat iste ratione voluptatibus dolores eligendi accusamus iure quis
        cupiditate a consequuntur officia exercitationem velit incidunt, minima
        inventore eius, nesciunt expedita vel. Unde architecto exercitationem
        omnis? Doloribus nisi eveniet iste!
      </p>
      <p>
        Go back to: <Link to={'/register'}>Registration</Link>
      </p>
    </div>
  );
};

export default Terms;
