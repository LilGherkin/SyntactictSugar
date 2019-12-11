import React from 'react';
import Action from "../Action";
import Wall from "../Wall";
import Projects from "../Projects";
import Userpost from "../Userpost";
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
            projects: {},
            postText: ""
        };
    };

    input = (text) => {
        this.setState({ postText: text });
    };

    postpost = () => {
        this.state.postText !== "" ? console.log(this.state.postText) : console.log("no");
        // axios.post("/post", postText);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m3">
                        <Projects title={"coolProjects"} />
                    </div>
                    <div className="col s12 m9">
                        <Wall
                            postpost={this.postpost}
                            postContent={this.input}
                        >
                            <Userpost />
                        </Wall>
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