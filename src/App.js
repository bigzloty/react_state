import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000); // Increment every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.bio}</p>
            <h2>{this.state.person.profession}</h2>
          </div>
        )}

        <div>
          <h3>Time since component mounted: {this.state.mountedTime} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;