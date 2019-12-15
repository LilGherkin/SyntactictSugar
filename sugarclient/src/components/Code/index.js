import React from 'react';
import Projects from "../Projects";
import "./style.css";

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        };
    };

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