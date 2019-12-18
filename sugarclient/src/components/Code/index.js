import React from 'react';
import Projects from "../Projects";
<<<<<<< HEAD
import "./style.css";
=======
// import axios from "axios";
// import { useAuth0 } from "../react-auth0-spa";
>>>>>>> 5484a216a2d4b17fde6d34c6ddc11dd60294cced

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
                        <h2 className="heading">Your Projects</h2>
                        <label className="search-label" htmlFor="search-input">
                            <input
                                type="text"
                                value=""
                                placeholder="Search..."
                            />
                        </label>
                        <Projects title={this.state.name + "Projects"} />
                    </div>
                    
                </div>
            </div>
        )
    }
};

export default Code;