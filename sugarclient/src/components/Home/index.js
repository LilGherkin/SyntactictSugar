import React from 'react';
import Action from "../Action";
import Wall from "../Wall";
import Projects from "../Projects";
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
            projects: {}
        };
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m3">
                        <Projects
                        //     {this.state.projects.map(proj) => {

                        // }}
                        />
                    </div>
                    <div className="col s12 m9">
                        <Wall />
                    </div>
                </div>
                <br />
                <div className="row">
                    <Action />
                </div>
            </div >
        )
    }
};
export default Home;