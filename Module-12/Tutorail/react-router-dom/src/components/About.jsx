import React from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

const About = () => {
  const { info } = useParams();
  return (
    <div>
      <NavBar />
      <h2>About Component</h2>
      <p> Info: {info}</p>
    </div>
  );
};

export default About;
