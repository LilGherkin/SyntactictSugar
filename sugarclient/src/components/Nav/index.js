import React from "react";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa";
import Loading from "../../components/Loading";
// import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Nav = () => {

    // Auth0 start
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            {/* <div className="box center-align">
                {!isAuthenticated && (<button onClick={() => loginWithRedirect({})}>Login</button>)}
                {isAuthenticated && (<button onClick={() => logout()}>Logout</button>)}
            </div> */}
            <div className="boxinternal">
                <div className="center-align">
                    <div className="scene">
                        <div className="box center-align">
                            <div className="front face center-align" id="org">
                                <img className="plane" src="/img/home-page-icon.png" />
                                <i className="fas fa-home"></i>
                            </div>
                            <Link to="/">
                                <div className="right face" href="/">
                                    <p>HOME</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="scene">
                        <div className="box modal-trigger" href="#modal1">
                            <div className="front face center-align" id="org">
                                <img className="plane" src="/img/circled-user.png" />
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="right face center-align">
                                <p>PROFILE</p>
                            </div>
                        </div>
                    </div>
                    <div className="scene">
                        <div className="box center-align" href="#modal1">
                            <div className="front face center-align" id="org">
                                <img className="plane" src="/img/login.png" />
                                <i className="fas fa-home"></i>
                            </div>
                            <Link to="/">
                                {!isAuthenticated && (<div className="right face" onClick={() => loginWithRedirect({})}>
                                    <p>LOGIN</p>
                                </div>)}
                                {isAuthenticated && (<div className="right face" onClick={() => logout()}>
                                    <p>LOGOUT</p>
                                </div>)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="scene">
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

                <div className="scene">
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
            {/* <div className="fill"></div> */}
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