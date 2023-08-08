import axios from 'axios';

const BASE_URL = `http://localhost:8000`;

// create
export const createOperation = async (productName, productCode, image, unitPrice, quantity, totalPrice) => {
  const postBody = {
    productName: productName,
    productCode: productCode,
    image: image,
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
  };

  return await axios
    .post(`${BASE_URL}/api/v1/create-product`, postBody)
    .then((res) => {
      if (res.status === 201) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

// read
export const readOperation = async () => {
  return await axios
    .get(`${BASE_URL}/api/v1/read-products`)
    .then((res) => {
      if (res.status === 200) {
        return res.data['data'];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

// read product by id
export const readProductByIdOperation = async (id) => {
  return await axios
    .get(`${BASE_URL}/api/v1/read-by-product-id/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.data['data'];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

// update
export const updateOperation = async (
  id,
  productName,
  productCode,
  image,
  unitPrice,
  quantity,
  totalPrice
) => {
  const updateBody = {
    productName: productName,
    productCode: productCode,
    image: image,
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
  };
  return await axios
    .patch(`${BASE_URL}/api/v1/update-product/${id}`, updateBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

// delete
export const deleteOperation = async (id) => {
  return await axios
    .delete(`${BASE_URL}/api/v1/delete-product/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};
