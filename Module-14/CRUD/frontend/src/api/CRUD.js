import axios from 'axios';

// create
export const Create = async (productName, productCode, image, unitPrice, quantity, totalPrice) => {
  const postBody = {
    productName: productName,
    productCode: productCode,
    image: image,
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
  };

  await axios
    .post('/api/v1/create-product', postBody)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

// read
export const Read = async () => {
  await axios
    .get('/api/v1/read-product')
    .then((res) => res.data.data)
    .catch((err) => console.error(err));
};

// update
export const Update = async (id, productName, productCode, image, unitPrice, quantity, totalPrice) => {
  const updateBody = {
    productName: productName,
    productCode: productCode,
    image: image,
    unitPrice: unitPrice,
    quantity: quantity,
    totalPrice: totalPrice,
  };
  await axios
    .patch(`/api/v1/update-product/${id}`, updateBody)
    .then((res) => res.data.data)
    .catch((err) => console.error(err));
};

// delete
export const Delete = async (id) => {
  await axios
    .delete('/api/v1/delete-product/' + id)
    .then((res) => res.data.data)
    .catch((err) => console.error(err));
};
