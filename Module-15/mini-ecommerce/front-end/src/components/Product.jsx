const Product = ({ product }) => {
  const { title, description, thumbnail, price } = product;

  return (
    <div className="card w-100  drop-shadow-lg bg-base-100">
      <figure className="w-full h-[250px]">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="text-blue-900 text-xl font-bold">{title}</h2>
        <p className=" text-gray-400">{description}</p>
        <h6 className="font-bold text-right">Price: ${price}</h6>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-outline btn-primary">Add Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
