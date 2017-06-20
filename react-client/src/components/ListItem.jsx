import React from 'react';

const ListItem = (props) => {
  const likedStyle = {
    color: 'green'
  }
  const dislikedStyle = {
    color: 'red'
  }
  if (props.item.listened === 1) {
    if (props.item.liked === 1) {
      return (
        <div>
          <div style={likedStyle}>{props.item.artist} -- {props.item.album} -- {props.item.song} -- {props.item.first_name} liked this</div>
        </div>
      )
    } else {
      return (
        <div>
          <div style={dislikedStyle}>{props.item.artist} -- {props.item.album} -- {props.item.song} -- {props.item.first_name} disliked this</div>
        </div>
      )
    }
  } else {
    return (
      <div>
        <div>{props.item.artist} -- {props.item.album} -- {props.item.song} -- <button>listened</button></div>
      </div>
    )
  }
}
export default ListItem;