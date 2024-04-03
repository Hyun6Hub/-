import React from 'react';

export default function Article({className, title, list}) {
    //!! props로 넘어오는 객체는 반드시 존재여부를 체크합시다!!!
    // const flist = list &&  list.length !== 0 ?  list : [] ;
    const flist = list &&  list; // list 레퍼런스변수가 존재하면 list를 flist에 재할당!!

    return (
      <div class={className}>
          <h3 class="skill__title">{title}</h3>
          <ul>
            {flist.map(value => (
              <li>{value}</li>
            ))}       
          </ul>
      </div>
    );
}