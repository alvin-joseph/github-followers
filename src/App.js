import React from "react";
import "./App.css";
import axios from "axios";

import Followers from "./components/Followers";
import SearchUser from "./components/SearchUser";

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    username: "alvin-joseph",
  };

  componentDidMount() {
    Promise.all([
      axios.get(`https://api.github.com/users/${this.state.username}`),
      axios.get(
        `https://api.github.com/users/${this.state.username}/followers`
      ),
    ])
      .then((res) => {
        this.setState({
          user: res[0].data,
          followers: res[1].data,
        });
      })
      .catch((err) => {
        alert(`${err}: User not found`);
      });
  }

  onChange = (evt) => {
    this.setState({
      username: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.componentDidMount();
    this.setState({
      username: "",
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="my-info">
            <SearchUser
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              username={this.state.username}
            />
            <img src={user.avatar_url} alt="my pic" />
            <br />
            <h2>Hi my name is {user.name}</h2>
            <a rel="noreferrer" target="_blank" href={user.html_url}>
              GitHub Link
            </a>
          </div>
        </div>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
