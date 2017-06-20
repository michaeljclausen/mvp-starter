import React from 'react';
import ListItem from './ListItem.jsx';
import AddNewArtist from './AddNewArtist.jsx';

const List = (props) => {
  if (props.selectedUser) {
    return (
      <div>
        <h4> **************** </h4>
        There are {props.items.length} items in {props.selectedUser.value}'s list.
        <ul>
          {props.items.map((item, i) => <ListItem item={item} key={i} updateListenedTo={props.updateListenedTo} updateLiked={props.updateLiked}/>)}
        </ul>
        <AddNewArtist user={props.selectedUser} selectUser={props.selectUser}/>
      </div>
    )
  } else {
    return (
      <div>
        <h4> **************** </h4>
        There are {props.items.length} items.
        <ul>
          {props.items.map((item, i) => <ListItem item={item} key={i} updateListenedTo={props.updateListenedTo} updateLiked={props.updateLiked}/>)}
        </ul>
      </div>
    )
  }
}

export default List;