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
import View from '../View';

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newContent: 0,
            content: "",
            projContent: null,
            button: "btn disabled",
            users: [],
            projects: [],
            me: ""
        };
    };

    create = () => { this.setState({ newContent: 1 }); };

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
            }).then(() => this.mount(this.state.me));
        };
        this.setState({ newContent: 0 });
    };

    // how to get user data from the api
    // loadUsers = () => {
    //     API.getusers()
    //         .then(res =>
    //             this.setState({ users: res.data })
    //             //console.log(res.data)
    //         ).catch(err => console.log(err));
    // };

    // componentDidMount() {
    //     this.loadUsers();
    // };

    get = () => {
        API.getProj().then(res => {
            this.setState({ projects: res.data.reverse() });
            console.log(this.state.projects)
        }).catch(err => console.log(err));
    };

    selectProj = (proj) => {
        API.getCont(proj.id).then(res => {
            console.log(res.data)
            this.setState({ projContent: res.data });
        }).catch(err => console.log(err));
        this.setState({ newContent: 2 });
    };

    mount = (user) => {
        this.setState({ me: user });
        user
            ? API.getProjUser(user.nickname).then(res => {
                console.log(res.data)
                this.setState({ projects: res.data.reverse() });
            }).catch(err => console.log(err))
            : console.log("not logged");
    };

    clicc = () => {
        this.setState({
            newContent: 0,
            projContent: null
        })
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
                                <br />
                                {this.state.newContent === 1 &&
                                    <Create
                                        input={this.input}
                                        inputtitle={this.inputtitle}
                                        save={this.save}
                                        button={this.state.button}
                                    />
                                }
                                {this.state.newContent === 0 &&
                                    <>
                                        <br /> <br /> <br /><br />
                                        <Profile mount={this.mount} />
                                    </>}
                                {this.state.newContent === 2 &&
                                    <></>
                                }
                                {this.state.projContent && this.state.newContent === 2 &&
                                    <View
                                        button={"btn waves-effect waves-light blue"}
                                        clicc={this.clicc}
                                        name={this.state.projContent.user}
                                        title={this.state.projContent.name}
                                        content={this.state.projContent.content}
                                    />
                                }
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