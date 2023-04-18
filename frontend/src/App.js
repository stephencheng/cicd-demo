//original
// import logo from './logo.svg';
// import './App0001.css';
//
// function App0001() {
//   return (
//     <div className="App0001">
//       <header className="App0001-header">
//         <img src={logo} className="App0001-logo" alt="logo" />
//         <p>
//           Edit <code>src/App0001.js</code> and save to reload.
//         </p>
//         <a
//           className="App0001-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App0001;

//------------demo app---------------
import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount = async () => {
    const response = await axios.get("/todo/list");
    this.setState({
      todos: response.data.todos
    });
  };

  render() {
    return (
        <div className="App">
          <h1>My Todo List</h1>
          <header className="App-header">
            {this.state.todos.map(todo => (
                <h2>{todo}</h2>
            ))}
          </header>
        </div>
    );
  }
}

export default App;
