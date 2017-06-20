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
      console.log(users);
      setState({
        users: users
      })
    })
  }

  selectUser(user) {
    console.log(`Hi I would like to pick ${user}.`)
  }

  render () {
    return (<div>
      <h1>Welcome to MusicTodo.ly</h1>
      <AddUser />
      <SelectUser users={this.state.users} onClick={this.selectUser.bind(this)} />
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));