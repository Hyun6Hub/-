import React from 'react';

export default function Button({name, count}) {
    return (
      <button class="category">
        {name}<span class="category__count">{count}</span>
      </button>
    );
}