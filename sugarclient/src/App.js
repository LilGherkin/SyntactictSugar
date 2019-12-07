import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
// import Action from "./components/Action";
import Footer from "./components/Footer";
import Home from "./components/Home";
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
            name: "<facePalm/>",
            whatever: null
        };
    };

     

    render() {
        
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <h1 className="header left black-text">{this.state.name}</h1>
                    </div>
                </div>
                <Router>
                    <Nav />
                    <br /><br /><br />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {/* <Route path="/about" exact component={about} /> */}
                    </Switch>
                </Router>
                <br />
                <Footer />
            </Wrapper>
        );
    };
};

export default App;
