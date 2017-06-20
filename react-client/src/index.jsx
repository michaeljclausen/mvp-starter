import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';
import AddUser from './components/AddUser.jsx';
import SelectUser from './components/SelectUser.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      users: [],
      selectedUser: null
    }
  }

  componentDidMount() {
    axios.get('/users')
    .then(users => {
      let userArray = users.data.map(user => {
        return user.user_name;
      });
      this.setState({
        users: userArray
      })
    })
  }

  selectUser(user) {
    console.log(`Hi I would like to pick ${user.value}.`)
    axios.get(`/user?username=${user.value}`)
    .then(data => {
      this.setState({
        items: data.data,
        selectedUser: user
      })
    });
  }

  updateListenedTo(item) {
    axios.get(`/update?itemid=${item.list_item_id}&listened=true`)
    .then(data => {
      console.log(data);
      this.selectUser(item.user_name);
    })
  }

  updateLiked(item, result) {
    console.log(item, result);
    axios.get(`/update?itemid=${item.list_item_id}&liked=${result}`)
    .then(data => {
      console.log(data);
      this.selectUser(item.user_name);
    })
  }

  render () {
    return (<div>
      <h1>Welcome to MusicTodo.ly</h1>
      <SelectUser users={this.state.users} onClick={this.selectUser.bind(this)} selectedUser={this.state.selectedUser}/>
      <List items={this.state.items}
      updateListenedTo={this.updateListenedTo.bind(this)} 
      selectedUser={this.state.selectedUser}
      selectUser={this.selectUser.bind(this)} 
      updateLiked={this.updateLiked.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));