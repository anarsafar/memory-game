import React, { Component } from "react";

class Login extends Component {
  state = {};
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="login-container">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Name:</label><br/>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={this.handleChange}
                required
              />
              <small>This is memory game</small>
            </div>
            <button onClick={this.handleClick}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
