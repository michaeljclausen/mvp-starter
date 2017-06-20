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
      users: []
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
        items: data.data
      })
    });
  }

  updateListenedTo(item) {
    console.log(item);
    //console.log(`I need to update the record for ${item.firstName}, ${item}`);
    axios.get(`/update?itemid=${item.list_item_id}`)
    .then(data => {
      //something else
    })
  }

  render () {
    return (<div>
      <h1>Welcome to MusicTodo.ly</h1>
      <AddUser />
      <SelectUser users={this.state.users} onClick={this.selectUser.bind(this)} />
      <List items={this.state.items} updateListenedTo={this.updateListenedTo.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));