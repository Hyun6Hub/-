import { useState } from 'react';
import { useEffect } from 'react';

export default function Products() {
  const [list, setList] = useState([]);
   
  useEffect(() => {
    fetch('data/products.json') // 문자열형태
    .then( res_data => res_data.json() )  // json 변환
    .then( result_data => {
        setList(result_data);
    })
    .catch( error => console.log(error))
  }, []);

   return (
    <>
      <h1>Show Products!!</h1>
      <table border='1'>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Id</th>
        </tr>
        {list.map((product)=>(
          <tr>
            <td>{product.no}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.id}</td>
          </tr>
        ))}
      </table>
    </>
  );
}