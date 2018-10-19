import React, { Component } from "react";
import axios from 'axios'

class Register extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const endpoint = 'http://localhost:9000/api/register'
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    )
  }
}

export default Register;
