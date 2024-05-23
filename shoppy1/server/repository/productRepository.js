import { promises as fsPromises } from 'fs';
import { db } from '../db/database_mysql80.js';

/**
 * 상품 등록
 */
export const insert = async (productData) => {  
  let result_rows = 0;
  const params = [
    productData.name,
    productData.price,
    productData.info,
    productData.uploadImage,
    productData.orgImage    
  ];
  const sql = `
      insert into shoppy_product(name, price, info, image, org_image, pdate)
        values(?, ?, ?, ?, ?, now())  
  `;
  try {
    const [rows] = await db.execute(sql, params);
    result_rows = rows.affectedRows;
  } catch (error) {
    console.log(error);  
  }

  return {cnt: result_rows};
}

/**
 * 개별 상품 파일 읽어오기
 */
export const getProduct = (id) => {
  const path = "data/product.json";
  const product = fsPromises
                      .readFile(path, "utf-8")
                      .then(data => { 
                        const jsonData = JSON.parse(data);
                        const product = jsonData
                                        .filter(item => item.id === id); 
                        return product[0];
                      })
                      .catch(error => console.log(error));
  return  product;                     
}

/**
 * 전체 상품 파일 읽어오기
 */
export const getProducts = () => {
  const sql = `
      select pid as id, image from shoppy_product 
          order by pdate
  `;

  return db 
          .execute(sql)
          .then((rows) => rows[0]);

  // const path = "data/product.json";
  // const products = fsPromises
  //                     .readFile(path, "utf-8")
  //                     .then(data => JSON.parse(data))
  //                     .catch(error => console.log(error));
  // return  products;                     
}