import React from 'react';
import Action from "../Action";
import Wall from "../Wall";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            things: 0
        };
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m8">
                        <Wall />
                    </div>
                </div>
                <div className="row">
                    <Action />
                </div>
            </div>
        )
    }
};
export default Home;