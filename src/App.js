import React, { Component } from 'react';

class App extends Component {
  state = {
    data: "not connected to react"
  }

  componentDidMount() {
    //call our backend
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
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
