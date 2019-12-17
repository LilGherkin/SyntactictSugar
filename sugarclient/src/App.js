import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Code from "./components/Code";
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
            plates: ["<facePalm/>", "{{{facePalm}}}", "facePalm();", "(facePalm)=>{}", ".facePalm{}", "./facePalm"],
            name: 0
        };
    };

    componentDidMount = () => {
        this.setState({ name: Math.floor(Math.random() * Math.floor(this.state.plates.length)) });
    }

    render() {
        return (
            <Wrapper>
                <div className="cover"></div>
                <div className="container">
                    <div className="row">
                        <h1 className="header left black-text b">{this.state.plates[this.state.name]}</h1>
                <Router>
                    <Nav />
                    <br /><br /><br />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/code" exact component={Code} />
                    </Switch>
                </Router>
                    </div>
                </div>
                <br />
                <Footer />
            </Wrapper>
        );
    };
};

export default App;