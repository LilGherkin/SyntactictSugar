import React from 'react';
import Projects from "../Projects";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yeet: null
        };
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m3">
                        <Projects />
                    </div>
                    <code>
                        code ands stuff
                    </code>
                </div>
            </div>
        )
    }
};

export default Code;