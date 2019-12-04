import React from 'react';
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      things: 0
    }
  };
  render() {
    return (
      <Wrapper>

      </Wrapper>
    );
  }
}
export default App;
