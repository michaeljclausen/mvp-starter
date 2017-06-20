import React from 'react';

const ListItem = (props) => {
  const likedStyle = {
    color: 'green'
  }
  const dislikedStyle = {
    color: 'red'
  }
  const decisionStyle = {
    color: 'purple'
  }
  if (props.item.listened === 1) {
    if (props.item.liked === null) {
      return (
        <div>
          <div style={decisionStyle}>{props.item.artist} -- {props.item.album} -- {props.item.song} -- Like it? 
          <button onClick={() =>{props.updateLiked(props.item, true)}}>yes</button><button onClick={() =>{props.updateLiked(props.item, false)}}>no</button></div>
        </div>
      )
    } else if (props.item.liked === 1) {
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
        <div>{props.item.artist} -- {props.item.album} -- {props.item.song} -- <button onClick={()=>{props.updateListenedTo(props.item)}}>listened</button></div>
      </div>
    )
  }
}
export default ListItem;