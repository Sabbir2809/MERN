import React, { useEffect, useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { errorToast, isEmpty, successToast } from '../../helpers/validationHelper';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import FullScreenLoader from '../Common/FullScreenLoader';

const CreateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let loader = useRef();
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    image: '',
    unitPrice: '',
    quantity: '',
    totalPrice: '',
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const res = await axios.get(`http://localhost:8000/api/v1/read-by-product-id/${id}`);
        const updateData = res.data['data'][0];
        setFormData(updateData);
      }
    })();
  }, [id]);

  const inputOnChange = (property, value) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();

    if (isEmpty(formData.productName)) {
      errorToast('Product Name is Required');
    } else if (isEmpty(formData.productCode)) {
      errorToast('Product Code is Required');
    } else if (isEmpty(formData.image)) {
      errorToast('Product Image URL is Required');
    } else if (isEmpty(formData.unitPrice)) {
      errorToast('Product Unit Price is Required');
    } else if (isEmpty(formData.quantity)) {
      errorToast('Product Quantity is Required');
    } else if (isEmpty(formData.totalPrice)) {
      errorToast('Product Total Price is Required');
    } else {
      let URI = `http://localhost:8000/api/v1/create-product`;

      if (id) {
        URI = `http://localhost:8000/api/v1/update-product/${id}`;
      }
      loader.classList.remove('d-none');
      const res = await axios.post(URI, formData);
      loader.classList.add('d-none');
      if (res.status === 200) {
        successToast('Product Data Successfully Save');
        navigate('/', { replace: true });
      }
    }
  };

  return (
    <div className='container mt-5'>
      <div className='d-none text-center' ref={(div) => (loader = div)}>
        <FullScreenLoader />
      </div>
      <div className='row'>
        <div className='col-md-6 p-2'>
          <label htmlFor='productName' className='text-primary'>
            Product Name:
          </label>
          <input
            onChange={(e) => inputOnChange('productName', e.target.value)}
            value={formData.productName}
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
            onChange={(e) => inputOnChange('productCode', e.target.value)}
            value={formData.productCode}
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
            onChange={(e) => inputOnChange('image', e.target.value)}
            value={formData.image}
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
            onChange={(e) => inputOnChange('unitPrice', e.target.value)}
            value={formData.unitPrice}
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
            onChange={(e) => inputOnChange('quantity', e.target.value)}
            value={formData.quantity}
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
            onChange={(e) => inputOnChange('totalPrice', e.target.value)}
            value={formData.totalPrice}
            type='text'
            placeholder='Product Total Price'
            className='form-control'
            id='totalPrice'
          />
        </div>
        <div className='row'>
          <div className='col-md-4 mt-4'>
            <button onClick={handleSaveProduct} className='btn btn-primary w-100'>
              {id ? 'Update Product' : 'Save Product'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
