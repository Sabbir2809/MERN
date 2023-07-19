import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/quotes`)
  //     .then((response) => response.json())
  //     .then((result) => setData(result));
  // }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/quotes`);
      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(data.quotes[2])}</p>
    </div>
  );
};

export default UseEffect;
