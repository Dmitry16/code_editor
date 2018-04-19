import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "'use strict'\nfunction findCertonaAPI() {\n  while true do {\n    return false;\n  }\n}"
    }
  }
  render() {
    const options = {
			lineNumbers: true,
			mode: 'javascript'
		};
    let myStyle = {
      background: 'pink'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JAVASCRIPT ZONE</h1>
        </header>
        <p className="App-intro">
          Paste your code, edit it, test it, and save it.
        </p>
        <div className="code_editor">
          <CodeMirror
            style={myStyle}
            value={this.state.value}
            options={options}
            onBeforeChange={(editor, data, value) => {
              this.setState({value});
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
