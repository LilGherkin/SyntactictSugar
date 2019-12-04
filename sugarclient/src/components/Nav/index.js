import React from "react";
// import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav(props) {
    return (
        <>
            <ul id="dropdown2" className="dropdown-content">
                <li><Link to="/">about</Link></li>
                <li><a href="#">tools</a></li>
                <li><a href="#">things</a></li>
            </ul>
            <div className="col s12 m4">
                <a class="dropdown-button col s12" href="#!" data-activates="dropdown2"><i
                    class="medium material-icons">menu</i>
                </a>
            </div>
        </>
    )
}

export default Nav;