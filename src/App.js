import React, { Component } from 'react';

class App extends Component {
  state = {
    data: "not connected to react"
  }

  componentDidMount() {
    //call our backend
    this.handleConnectToBackend()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  handleConnectToBackend = async () => {
    const res = await fetch('/');
    const body = await res.json();

    if (res.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  render() {
    return (
      <div>
        React App is connected!
        <p>{this.state.data}</p>
      </div>
    )
  }
}

export default App;
