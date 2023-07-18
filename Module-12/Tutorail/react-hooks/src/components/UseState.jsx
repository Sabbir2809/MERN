import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  const [obj, setObj] = useState({
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3',
  });
  const change = () => {
    setObj({
      ...obj,
      key1: 'New Value 1',
    });
  };

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setItem([...list]);
  };

  const [formObj, setFormObj] = useState({
    fName: '',
    lName: '',
    city: '',
    gender: '',
  });

  const inputOnChange = (property, value) => {
    setFormObj({
      ...formObj,
      [property]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
    console.log(formObj);
  };

  return (
    <section>
      <div className='container'>
        <h1>Value: {count}</h1>
        <button onClick={() => setCount(count + 1)} className='btn btn-success'>
          Increment
        </button>
        <button onClick={decrement} className='btn btn-danger'>
          Decrement
        </button>
      </div>

      <div className='container '>
        <h2>{obj.key1}</h2>
        <button onClick={change} className='btn btn-dark'>
          Change Value
        </button>
      </div>

      <div className='container '>
        <table>
          <tbody>
            {list.length !== 0 ? (
              list.map((element, index) => (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        <input onChange={(e) => setItem(e.target.value)} type='text' placeholder='Item' />
        <button onClick={addToList} className='btn btn-success'>
          Add
        </button>
      </div>

      <div className='container'>
        <form onSubmit={formSubmit}>
          <input
            onChange={(e) => inputOnChange('fName', e.target.value)}
            value={formObj.fName}
            type='text'
            placeholder='First Name'
          />
          <input
            onChange={(e) => inputOnChange('lName', e.target.value)}
            value={formObj.lName}
            type='text'
            placeholder='Last Name'
          />
          <select onChange={(e) => inputOnChange('city', e.target.value)} value={formObj.city}>
            <option value=''>Choose City</option>
            <option value='Dhaka'>Dhaka</option>
            <option value='Khulna'>Khulna</option>
            <option value='Rajshahi'>Rajshahi</option>
          </select>
          <input
            onChange={() => inputOnChange('gender', 'Male')}
            checked={formObj.gender === 'Male'}
            type='radio'
            name='gender'
          />
          Male
          <input
            onChange={() => inputOnChange('gender', 'Female')}
            checked={formObj.gender === 'Female'}
            type='radio'
            name='gender'
          />
          Female
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default UseState;
