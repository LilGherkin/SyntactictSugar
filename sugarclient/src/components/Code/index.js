import React from 'react';
import Projects from "../Projects";
import Nav from "../Nav";
import "./style.css";

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            newContent: false,
            content: ""
        };
    };

    create = () => {
        this.setState({ newContent: true })
    }

    input = (text) => {
        console.log(text.target.value)
    }

    render() {
        return (
            <>
                <div className="cover"></div>
                <Nav />
                <br /> <br /> <br />
                <div className="container">
                    <div className="row center">
                        <div className="col s12 m3">
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
                                    <textarea id="textarea1" className="materialize-textarea" onChange={this.state.input}></textarea>
                                    <button className="btn waves-effect waves-light purple" type="submit" name="action" onClick={this.create}>save</button>
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