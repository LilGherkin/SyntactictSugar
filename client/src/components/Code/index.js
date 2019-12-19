import React from 'react';
import Projects from "../Projects";
import Projlist from "../projlist";
import API from "../../utils/API";
import "./style.css";

// import axios from "axios";
// import { useAuth0 } from "../react-auth0-spa";

import Nav from "../Nav";
import "./style.css";
import { List, ListItem } from "../../components/List";


class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            newContent: false,
            content: "",
            projName: "toot",
            button: "btn disabled",
            users: [],
            projects: []
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
    };

    inputtitle = text => {
        this.setState({ projName: text.target.value });
    }

    save = () => {
        this.state.projName !== "" && this.state.content !== ""
            ? API.postProj({ content: this.state.content, name: this.state.projName })
            : console.log("NOTHING");
        this.get();
    }

    // how to get user data from the api
    loadUsers = () => {
        API.getusers()
            .then(res =>
                this.setState({ users: res.data })
                //console.log(res.data)
            ).catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadUsers();
        this.get();
    };

    // postpost = () => {
    //     this.state.projName !== "" && this.state.content !== ""
    //         ? API.postProj({ content: this.state.content, name: this.state.name })
    //         : console.log("NOTHING");
    //     this.get();
    // };

    get = () => {
        API.getProj().then(res => {
            this.setState({ projects: res.data.reverse() });
            console.log(this.state.projects)
        }).catch(err => console.log(err));
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
                            {/* <label className="search-label" htmlFor="search-input">
                                <input
                                    type="text"
                                    value=""
                                    placeholder="Search..."
                                />
                            </label> */}
                            <Projects title={this.state.name + "Projects"}>
                                {this.state.projects.map(proj =>
                                    <Projlist
                                        projtitle={proj.name}
                                    />
                                )}
                            </Projects>
                        </div>
                        <div className="col s12 m9">
                            {this.state.newContent &&
                                <>
                                    <textarea id="textarea2" className="materialize-textarea" onChange={this.inputtitle}></textarea>
                                    <label for="textarea2">projectTitle</label>
                                    <br />
                                    <textarea id="textarea1" className="materialize-textarea" onChange={this.input}></textarea>
                                    <label for="textarea1">content</label>
                                    <br />
                                    <button className={this.state.button} type="submit" name="action" onClick={this.save}>save</button>
                                </>}
                            {!this.state.newContent && <code>yes it is a profile</code>}
                        </div>
                    </div>
                    {/* {console.log("f")}
                    {this.state.users.length ? (
                        <List>

                            {this.state.users.map(user => {
                                return (
                                    <ListItem key={user._id}>
                                        <a href={"/users/" + user._id}>
                                            <strong>
                                                {user.username} by {user.username}
                                                {console.log("test")}
                                            </strong>
                                        </a>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )} */}
                </div>
            </>
        )
    }
};

export default Code;