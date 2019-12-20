import React from 'react';
import Projlist from "../projlist";
import Wall from "../Wall";
import Projects from "../Projects";
import Userpost from "../Userpost";
import Nav from "../Nav";
import API from "../../utils/API";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            postText: "",
            button: ["btn disabled", "btn waves-effect waves-light blue"],
            btnState: 0,
            comments: [],
            view: true
        };
    };

    input = (text) => {
        this.setState({ postText: text });
        text !== "" ? this.setState({ btnState: 1 }) : this.setState({ btnState: 0 });
    };

    postpost = (user) => {
        console.log(user)
        if (this.state.postText !== "") {
            API.postComment({
                comment: this.state.postText,
                user: user.nickname,
                img: user.picture
            }).then(() => this.get())
        };
        this.setState({ postText: "" });
    };

    componentDidMount = () => {
        this.get();
        API.getProj().then(res => {
            this.setState({ projects: res.data.reverse() });
            console.log(this.state.projects);
        }).catch(err => console.log(err));
    };

    get = () => {
        API.getComments().then(res => {
            this.setState({ comments: res.data.reverse() });
        }).catch(err => console.log(err))//.then(() => console.log(this.state.comments));
    };

    selectProj = (proj) => {
        console.log(proj.id)
        API.getCont(proj.id).then(res => {
            console.log(res.data);
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
                        <div className="col s12 m3 l3">
                            <Projects title={"recentProjects"}>
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
                            {this.state.view && <Wall
                                postpost={this.postpost}
                                postContent={this.input}
                                buttonClass={this.state.button[this.state.btnState]}
                            // posts={this.state.comments}
                            >
                                {this.state.comments.map(post =>
                                    <Userpost
                                        text={post.comment}
                                        username={post.user}
                                        img={post.img}
                                    />
                                )}
                            </Wall>}
                            {!this.state.view && <>

                            </>}
                        </div>
                    </div>
                    {/* <br />
                <div className="row">
                    <Action />
                </div> */}
                </div >
            </>
        )
    }
};
export default Home;