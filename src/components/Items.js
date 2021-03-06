import React from 'react';
import Item from './Item';

const Items = ({ items, category }) => {
  console.log('category:', category);
  console.log(
    'Items',
    items.filter((item) => item.category === category)
  );
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items
        .filter((item) => item.category === category)
        .map((item, ItemID) => (
          <Item item={item} key={ItemID} />
        ))}{' '}
      {category === 'all' &&
        items.map((item, ItemID) => <Item item={item} key={ItemID} />)}
      <div className="p-2"></div>
    </div>
  );
};

export default Items;
