import React from 'react';

export default function Progress({name, value}) {
    return (
      <>
         <div class="bar__metadata"><span>{name}</span><span>{value}%</span></div>
         <div class="bar__bg"><div class="bar__value" style={{width:`${value}%`}}></div></div>
      </>
    );
}