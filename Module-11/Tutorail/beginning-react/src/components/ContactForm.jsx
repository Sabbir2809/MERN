import React from 'react';

const ContactForm = () => {
  const submitForumData = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };
  return (
    <div>
      <form onSubmit={submitForumData}>
        <input type='text' placeholder='Enter your Name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
