import React from 'react';
import Projects from "../Projects";
import Projlist from "../projlist";
import API from "../../utils/API";
import "./style.css";
import Nav from "../Nav";
import "./style.css";
import { List, ListItem } from "../../components/List";
import Profile from '../Profile/Profile.js';
import Create from '../Create';

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newContent: false,
            content: "",
            projContent: null,
            button: "btn disabled",
            users: [],
            projects: []
        };
    };

    create = () => { this.setState({ newContent: true }); };

    input = text => {
        this.setState({ content: text });
        text !== ""
            ? this.setState({ button: "btn waves-effect waves-light purple" })
            : this.setState({ button: "btn disabled" });
    };

    inputtitle = text => {
        this.setState({ projName: text });
    };

    save = (user) => {
        if (this.state.projName !== "" && this.state.content !== "") {
            API.postProj({
                content: this.state.content,
                name: this.state.projName,
                user: user.nickname
            }).then(() => this.get());
        };
    };

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

    get = () => {
        API.getProj().then(res => {
            this.setState({ projects: res.data.reverse() });
            console.log(this.state.projects)
        }).catch(err => console.log(err));
    };

    selectProj = (proj) => {
        // console.log(proj)
        // API.getCont(proj.id).then(res => {
        //     }
        //     this.setState({ projContent: res.data });
        // }).catch(err => console.log(err));
    };

    mount = (user) => {
        console.log(user)
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
                            <button className="btn waves-effect waves-light purple" type="submit" name="action" onClick={this.create}>createProject</button>
                            <br /><br /><br />
                            {/* <label className="search-label" htmlFor="search-input">
                                <input
                                    type="text"
                                    value=""
                                    placeholder="Search..."
                                />
                            </label> */}
                            {/* <Projects title={this.state.name + "Projects"}>
                                {this.state.projects.map(proj =>
                                    <Projlist
                                        projtitle={proj.name}
                                    />
                                )}
                            </Projects> */}

                            <Projects title={"yourProjects"}>
                                {this.state.projects.map(proj =>
                                    <Projlist
                                        user={proj.user}
                                        selectProj={this.selectProj}
                                        projtitle={proj.name}
                                        id={proj._id}
                                    />
                                )}
                            </Projects>
                        </div>
                        <div className="col s12 m9">
                            <div className="center">
                                {this.state.newContent &&
                                    <Create
                                        input={this.input}
                                        inputtitle={this.inputtitle}
                                        save={this.save}
                                        button={this.state.button}
                                    />
                                }
                                {!this.state.newContent &&
                                    <>
                                        <br /> <br /> <br /><br />
                                        <Profile mount={this.mount} />
                                    </>}
                            </div>
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