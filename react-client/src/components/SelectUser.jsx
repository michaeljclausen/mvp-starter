import React from 'react';
import Dropdown from 'react-dropdown'


const SelectUser = (props) => (
  <div>
    <Dropdown options={props.users} onChange={props.onClick}  placeholder="Select a user" />
  </div>
)

export default SelectUser;