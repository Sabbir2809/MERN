import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { convertPriceStringToNumber, getEmail, getGuestCart, getToken } from "../helpers/SessionHelper";
import Loader from "./Loader";

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const postBody = { userEmail: getEmail() };
        const token = { headers: { token: getToken() }, productId: getGuestCart() };
        if (getToken()) {
          const res = await axios.post(`http://localhost:8000/api/cart-list`, postBody, token);
          if (res.data) {
            setCartItems(res.data.data);
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        if (error.response.data.success === false) {
          return toast.error(error.response.data.message);
        }
      }
    })();
  }, []);

  const handleRemoveCart = async (productId) => {
    try {
      const postBody = { userEmail: getEmail() };
      const token = { headers: { token: getToken() } };
      const res = await axios.delete(`http://localhost:8000/api/delete-cart/${productId}`, token);
      if (res.status) {
        toast.success("Remove Cart Successful!");
        if (getToken()) {
          const res = await axios.post(`http://localhost:8000/api/cart-list`, postBody, token);
          if (res.data) {
            setCartItems(res.data.data);
          }
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      if (error.response.data.success === false) {
        return toast.error(error.response.data.message);
      }
    }
  };

  const calculateTotalAmount = () => {
    const totalPrice = cartItems.reduce((total, currentValue) => {
      const price = convertPriceStringToNumber(currentValue);
      return total + price;
    }, 0);
    return totalPrice.toLocaleString();
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {cartItems?.length <= 0 ? (
              <Loader />
            ) : (
              cartItems?.map((item) => (
                <div key={item?._id} className="card card-side bg-white shadow-xl">
                  <figure>
                    <img className="w-40" src={item?.cartList?.thumbnail} alt={item?.cartList?.title} />
                  </figure>
                  <div className="card-body">
                    <h6 className="text-black">{item?.cartList?.title}</h6>
                    <h3 className="text-xl font-bold text-gray-700">Price: ${item?.cartList?.price}</h3>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleRemoveCart(item?._id)}
                        className="btn btn-sm btn-primary btn-outline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: {cartItems.length}</h2>
            <h6>Total Price: $ {calculateTotalAmount()} </h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
