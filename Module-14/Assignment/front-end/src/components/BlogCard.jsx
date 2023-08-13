import './../assets/styles/card.css';

const BlogCard = ({ blog }) => {
  const { createdAt, image, title, description } = blog;

  return (
    <>
      <div className='card__header'>
        <img src={image} alt='card__image' className='card__image' width='600' />
      </div>
      <div className='card__body'>
        <h4>{title}</h4>
        <p>Description: {description}</p>
      </div>
      <div className='card__footer'>
        <div className='user'>
          <div className='user__info'>
            <h5>{blog?.user?.username}</h5>
            <small>{createdAt}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
