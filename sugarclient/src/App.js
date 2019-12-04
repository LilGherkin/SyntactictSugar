import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Action from "./components/Action"
import Footer from "./components/Footer";
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
            whatever: null
        }
    };
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <h1 className="header left black-text">facePalm</h1>
                    </div>
                    <div className="row">
                        <Router>
                            <Nav />
                            <Switch>
                                {/* <Route path="/" exact component={} /> */}
                            </Switch>
                        </Router>
                    </div>
                    <div className="row">
                        <Action />
                    </div>
                </div>
                <Footer />
            </Wrapper>
        );
    }
}
export default App;
