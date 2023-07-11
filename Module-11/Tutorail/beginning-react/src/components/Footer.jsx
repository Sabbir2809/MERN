import React from 'react';

const Footer = ({ api }) => {
  return (
    <div>
      <p>{api.footerContent}</p>
    </div>
  );
};

export default Footer;
