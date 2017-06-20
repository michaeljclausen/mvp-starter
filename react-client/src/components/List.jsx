import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> **************** </h4>
    There are { props.items.length } items.
    <ul>
      {props.items.map((item, i) => <ListItem item={item} key={i} updateListenedTo={props.updateListenedTo} updateLiked={props.updateLiked}/>)}
    </ul>
  </div>
)

export default List;