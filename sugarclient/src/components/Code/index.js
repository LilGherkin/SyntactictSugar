import React from 'react';
import Projects from "../Projects";
<<<<<<< HEAD
<<<<<<< HEAD
import "./style.css";
=======
// import axios from "axios";
// import { useAuth0 } from "../react-auth0-spa";
>>>>>>> 5484a216a2d4b17fde6d34c6ddc11dd60294cced
=======
import Nav from "../Nav";
import "./style.css";
>>>>>>> 6dd038944ebf39b0bbec99336b61f365c0553507

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            newContent: false,
            content: "",
            button: "btn disabled"
        };
    };

    create = () => {
        this.setState({ newContent: true });
    }

    input = text => {
        this.setState({ content: text.target.value });
        text.target.value !== ""
            ? this.setState({ button: "btn waves-effect waves-light purple" })
            : this.setState({ button: "btn disabled" });
    }

    save = () => {
        console.log(this.state.content);
    }

    render() {
        return (
            <>
                <div className="cover"></div>
                <Nav />
                <br /> <br /> <br />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m3 center">
                            <h2 className="heading">Your Projects</h2>
                            <button className="btn waves-effect waves-light purple" type="submit" name="action" onClick={this.create}>createProject</button>
                            <br /><br /><br />
                            <label className="search-label" htmlFor="search-input">
                                <input
                                    type="text"
                                    value=""
                                    placeholder="Search..."
                                />
                            </label>
                            <Projects title={this.state.name + "Projects"} />
                        </div>
                        <div className="col s12 m9">
                            {this.state.newContent &&
                                <>
                                    <textarea id="textarea1" className="materialize-textarea" onChange={this.input}></textarea>
                                    <button className={this.state.button} type="submit" name="action" onClick={this.save}>save</button>
                                </>}
                            {!this.state.newContent && <code>what the</code>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Code;