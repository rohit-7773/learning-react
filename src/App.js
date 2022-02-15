import React, {Component} from "react";

var pageContent = (
  <div>
    <img src="../public/react-logo.png" width="40px" alt="react logo"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

class App extends Component {
    render() {
      return pageContent;
    }
}

export default App;