import React from 'react';
import Action from "../Action";
import Wall from "../Wall";
import Projects from "../Projects";
import Userpost from "../Userpost";
import Nav from "../Nav";
import API from "../../utils/API";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {},
            postText: "",
            button: ["btn disabled", "btn waves-effect waves-light blue"],
            btnState: 0,
            comments: []
        };
    };

    input = (text) => {
        this.setState({ postText: text });
        text !== "" ? this.setState({ btnState: 1 }) : this.setState({ btnState: 0 });
    };

    postpost = () => {
        this.state.postText !== ""
            ? API.postComment({ comment: this.state.postText })
            : console.log("NOTHING");
        this.setState({ postText: "" });
        this.get();
    };

    componentDidMount = () => {
        this.get();
    };

    get = () => {
        API.getComments().then(res => {
            this.setState({ comments: res.data.reverse() });
            console.log(this.state.comments);
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
                            <Projects title={"recentProjects"} />
                        </div>
                        <div className="col s12 m9">
                            <Wall
                                postpost={this.postpost}
                                postContent={this.input}
                                buttonClass={this.state.button[this.state.btnState]}
                            // posts={this.state.comments}
                            >
                                {this.state.comments.map(post =>
                                    <Userpost
                                        text={post.comment}
                                        username={post._id}
                                    />
                                )}
                            </Wall>
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