import React from 'react';
import Action from "../Action"
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
            <div className="row">
                <Action />
            </div>
        )
    }
};
export default Home;