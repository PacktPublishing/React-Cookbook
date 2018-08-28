import React from 'react';

const List = props => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key}>
        {item.task}
      </li>
    ))}
  </ul>
);

export default List;
