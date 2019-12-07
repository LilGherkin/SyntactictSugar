import React from "react";
import "./style.css";
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
            <div className="boxinternal z-depth-3">
                <div className="scene">
                    <div className="box center-align">
                        <div className="front face center-align" id="org">
                            <img className="plane" src="assets/img/info.png" />
                            <i className="fas fa-home"></i>
                        </div>
                        <a href="/">
                            <div className="right face" href="/">
                                <p>about</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="scene">
                    <div className="box modal-trigger" href="#modal1">
                        <div className="front face center-align" id="org">
                            <img className="plane" src="assets/img/plane.png" />
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="right face center-align">
                            <p>contact</p>
                        </div>
                    </div>
                </div>

                <div className="scene">
                    <div className="box">
                        <div className="front face center-align" id="org">
                            <img className="plane" src="assets/img/banjo.png" />
                            <i className="fas fa-home"></i>
                        </div>
                        <a href="/music">
                            <div className="right face center-align">
                                <p>projects</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="scene">
                    <div className="box">
                        <div className="front face center-align" id="org">
                            <img className="plane" src="assets/img/port.png" />
                            <i className="fas fa-home"></i>
                        </div>
                        <a href="/portfolio">
                            <div className="right face center-align">
                                <p>portfolio</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="scene">
                    <div className="box">
                        <div className="front face center-align" id="org">
                            <img className="plane" src="assets/img/train.png" />
                            <i className="fas fa-home"></i>
                        </div>
                        <a href="/travelogue">
                            <div className="right face center-align">
                                <p>travel</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="scene">
                    <div className="box">
                        <div className="front face center-align" id="org">
                            <img className="plane" src="assets/img/box.png" />
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="right face center-align">
                            <p>other</p>
                        </div>
                    </div>
                </div> */}
                <div className="fill"></div>
            </div>
            {/* <div className="row">
                <ul id="dropdown2" className="dropdown-content">
                    <li><Link to="/">about</Link></li>
                    <li><a href="#">tools</a></li>
                    <li><a href="#">things</a></li>
                </ul>
                <div className="col s12 m4">
                    <a className="dropdown-button col s12" href="#!" data-activates="dropdown2"><i
                        className="medium material-icons">menu</i>
                    </a>
                </div>
            </div> */}
        </>
    )
}

export default Nav;