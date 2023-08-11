import React, { useEffect, useState } from 'react';
import { successToast } from '../../helpers/validationHelper';
import { useNavigate } from 'react-router';
import axios from 'axios';

const ReadTable = () => {
  const [dataList, setDataList] = useState([]);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:8000/api/v1/read-products`);
      setDataList(res.data.data);
    })();
  }, [id]);

  const handleUpdateProduct = (id) => {
    navigate(`/update-product/${id}`, { replace: true });
  };

  const handleDeleteProduct = (id) => {
    (async () => {
      await axios.delete(`http://localhost:8000/api/v1/delete-product/${id}`);
      successToast('Product Deleted Successfully');
      setId(id);
    })();
  };

  if (dataList.length > 0) {
    return (
      <div className='container mt-3 table-responsive '>
        <table className='table table-striped table-bordered table-hover'>
          <thead className='table-primary text-center'>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {dataList.map((item) => (
              <tr key={item.productCode}>
                <td>
                  <img className='list-img' src={item.image} alt='Product Image' />
                </td>
                <td>{item.productName}</td>
                <td>{item.productCode}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <button
                    onClick={() => handleUpdateProduct(item._id)}
                    className='btn btn-warning btn-sm mx-1'>
                    Update
                  </button>
                  <button onClick={() => handleDeleteProduct(item._id)} className='btn btn-danger btn-sm'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className='text-center mt-4 text-secondary'>
        <h1>Please Create a new Product</h1>
      </div>
    );
  }
};

export default ReadTable;
