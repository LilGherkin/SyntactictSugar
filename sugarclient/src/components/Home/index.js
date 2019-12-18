import React from 'react';
import Action from "../Action";
import Wall from "../Wall";
import Projects from "../Projects";
import Userpost from "../Userpost";
import Nav from "../Nav";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {},
            postText: "",
            button: ["btn disabled", "btn waves-effect waves-light blue"],
            btnState: 0,
        };
    };

    input = (text) => {
        this.setState({ postText: text });
        text !== "" ? this.setState({ btnState: 1 }) : this.setState({ btnState: 0 });
    };

    postpost = () => {
        this.state.postText !== "" ? console.log(this.state.postText) : console.log("NOTHING");
        this.setState({ postText: "" });
        // axios.post("/post", postText);
    };

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
                            >
                                <Userpost />
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