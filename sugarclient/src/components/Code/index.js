import React from 'react';
import Projects from "../Projects";
// import axios from "axios";
// import { useAuth0 } from "../react-auth0-spa";

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        };
    };

    // componentDidMount = () => {
    //     isAuthenticated && (
    // }

    // getUser = () => {
    //     axios.get("/api/users").then(whoa => {

    //     })
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m3">
                        <Projects title={this.state.name + "Projects"} />
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