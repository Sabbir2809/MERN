import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import FullScreenLoader from '../Common/FullScreenLoader';
import { errorToast, isEmpty, successToast } from '../../helpers/validationHelper';
import axios from 'axios';

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let productName,
    productCode,
    image,
    unitPrice,
    quantity,
    totalPrice,
    loader = useRef();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:8000/api/v1/read-by-product-id/${id}`);
      const result = res.data.data[0];
      productName.value = result['productName'];
      productCode.value = result['productCode'];
      image.value = result['image'];
      unitPrice.value = result['unitPrice'];
      quantity.value = result['quantity'];
      totalPrice.value = result['totalPrice'];
    })();
  }, []);

  const handleUpdateProduct = () => {
    const updateBody = {
      productName: productName.value,
      productCode: productCode.value,
      image: image.value,
      unitPrice: unitPrice.value,
      quantity: quantity.value,
      totalPrice: totalPrice.value,
    };

    if (isEmpty(updateBody.productName)) {
      errorToast('Product Name is Required');
    } else if (isEmpty(updateBody.productCode)) {
      errorToast('Product Code is Required');
    } else if (isEmpty(updateBody.image)) {
      errorToast('Product Image URL is Required');
    } else if (isEmpty(updateBody.unitPrice)) {
      errorToast('Product Unit Price is Required');
    } else if (isEmpty(updateBody.quantity)) {
      errorToast('Product Quantity is Required');
    } else if (isEmpty(updateBody.totalPrice)) {
      errorToast('Product Total Price is Required');
    } else {
      loader.classList.remove('d-none');
      (async () => {
        await axios.patch(`http://localhost:8000/api/v1/update-product/${id}`, updateBody);
        loader.classList.add('d-none');
        successToast('Product Data Successfully Updated');
        navigate('/', { replace: true });
      })();
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='d-none text-center' ref={(div) => (loader = div)}>
          <FullScreenLoader />
        </div>
        <div className='row '>
          <div className='col-md-6 p-2'>
            <label htmlFor='productName' className='text-primary'>
              Product Name:
            </label>
            <input
              ref={(input) => (productName = input)}
              type='text'
              placeholder='Enter Your Product Name'
              className='form-control'
              id='productName'
            />
          </div>
          <div className='col-md-6 p-2'>
            <label htmlFor='productCode' className='text-primary'>
              Product Code:
            </label>
            <input
              ref={(input) => (productCode = input)}
              type='text'
              placeholder='Enter Your Product Code'
              className='form-control'
              id='productCode'
            />
          </div>
          <div className='col-md-6 p-2'>
            <label htmlFor='imageURL' className='text-primary'>
              Image URL:
            </label>
            <input
              ref={(input) => (image = input)}
              type='text'
              placeholder='Enter Your Product Image URL'
              className='form-control'
              id='imageURL'
            />
          </div>
          <div className='col-md-6 p-2'>
            <label htmlFor='unitPrice' className='text-primary'>
              Unit Price:
            </label>
            <input
              ref={(input) => (unitPrice = input)}
              type='text'
              placeholder='Please Enter Your Product Unit Price'
              className='form-control'
              id='unitPrice'
            />
          </div>
          <div className='col-md-6 p-2'>
            <label htmlFor='productQuantity' className='text-primary'>
              Quantity:
            </label>
            <input
              ref={(input) => (quantity = input)}
              type='text'
              placeholder='Please Enter Your Product Quantity'
              className='form-control'
              id='productQuantity'
            />
          </div>
          <div className='col-md-6 p-2'>
            <label htmlFor='totalPrice' className='text-primary'>
              Total Price:
            </label>
            <input
              ref={(input) => (totalPrice = input)}
              type='text'
              placeholder='Product Total Price'
              className='form-control'
              id='totalPrice'
            />
          </div>
          <div className='row'>
            <div className='col-md-4 mt-4'>
              <button onClick={handleUpdateProduct} className='btn btn-primary w-100'>
                Update Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
