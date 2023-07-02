import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <input type='text' placeholder='Enter your Name' />
      <button onClick={() => alert('Successfully')}>Submit</button>
    </div>
  );
};

export default ContactForm;
