import { promises as fsPromises } from 'fs';
import { db } from '../db/database_mysql80.js';

/**
 * 장바구니 count
 */
export const getCount = async(userId) => {
  const sql = `
  select sum(qty) count from shoppy_cart
	  where user_id = ?
  `;

  return db
          .execute(sql, [userId])
          .then(result => result[0][0]); // {count : 4}
}


/**
 * 장바구니 체크 : pid, size가 동일한 데이터 체크
 */
const cartCheck = async(items) => {
  const sql = `
        select count(cid) cnt, cid from shoppy_cart
        where pid = ? and size= ?
          group by cid
  `;
  
  return db
          .execute(sql, [items.pid, items.size])
          .then(result => result[0][0]);  // { cnt : 1, cid : 3 }
}

/**
 * 장바구니 추가
 */
export const insert = async(items) => {
  //cartCheck 함수를 통해 pid, size가 동일한 데이터 체크
  const checkResult = await cartCheck(items);
  let result_rows = 0;
  let sql = ``;

  if(checkResult === undefined) {
    sql = `
      INSERT INTO SHOPPY_CART(PID, SIZE, CDATE, USER_ID) 
            VALUES(?, ?, NOW(), 'hong')
    `;
    const [result] = await db.execute(sql, [items.pid, items.size]);
    result_rows = result.affectedRows;
  } else {
    sql =  `
      update shoppy_cart  set qty = qty + 1  where cid = ?
    `;
    const [result] = await db.execute(sql, [checkResult.cid]);
    result_rows = result.affectedRows;
  }
  return {cnt : result_rows};
}


/**
 * 장바구니 리스트
 */
export const getCarts = (items) => {
  const path = "data/product.json";
  const cartList = fsPromises
                    .readFile(path, "utf-8")
                    .then(data => { 
                        const products = JSON.parse(data);
                        const updateCartItems = items.map((item, index) => {
                          //item ==> id:1
                          const product = products.find(product => product.id === item.id);
                            if(product) {
                              return {...item,
                                      image:product.image, 
                                      name:product.name, 
                                      price:product.price, 
                                      info:product.info };np
                            }
                          return item;
                        });

                        return updateCartItems;
                    })
                    .catch(error => console.log(error));

  return cartList;
}
