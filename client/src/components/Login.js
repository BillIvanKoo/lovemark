import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login } from '../actions'

class Login extends Component {
  constructor(){
    super();
    this.state={
      username: '',
      password: ''
    }
  }

  handleUsername(username) {
    this.setState({
      username
    })
  }

  handlePassword(password) {
    this.setState({
      password
    })
  }

  render(){
    return (
      <form>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Enter username"
            onChange={(e)=>{this.handleUsername(e.target.value)}}
          />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={(e)=>{this.handlePassword(e.target.value)}}
          />
        </FormGroup>
        <Button onClick={()=>{this.props.login(this.state.username, this.state.password)}}>
        Submit
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
     return dispatch(login(username, password))
  }
})

export default connect(null, mapDispatchToProps)(Login);
