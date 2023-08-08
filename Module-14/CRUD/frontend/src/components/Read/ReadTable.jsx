import React, { useEffect, useState } from 'react';
import FullScreenLoader from '../Common/FullScreenLoader';
import { deleteOperation, readOperation } from '../../api/CRUD';
import { errorToast, successToast } from '../../helpers/validationHelper';

const ReadTable = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    readOperation().then((data) => {
      setDataList(data);
    });
  }, []);

  const handleUpdateProduct = (id) => {};

  const handleDeleteProduct = (id) => {
    deleteOperation(id).then((result) => {
      if (result === true) {
        successToast('Product Deleted Successfully');
        window.location.reload(false);
      } else {
        errorToast('Request Fail, Please Try Again...');
      }
    });
  };

  if (dataList.length > 0) {
    return (
      <div className='container mt-3 table-responsive '>
        <table className='table table-striped table-bordered table-hover'>
          <thead className='table-dark text-center'>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Image URL</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {dataList.map((item) => (
              <tr key={item.productCode}>
                <td>{item.productName}</td>
                <td>{item.productCode}</td>
                <td>
                  <img className='list-img' src={item.image} alt='Product Image' />
                </td>
                <td>{item.unitPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <button onClick={handleUpdateProduct()} className='btn btn-warning btn-sm mx-1'>
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
      <div className='text-center'>
        <FullScreenLoader />
      </div>
    );
  }
};

export default ReadTable;