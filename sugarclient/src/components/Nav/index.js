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
                            <Link to="/code">
                                <div className="right face center-align">
                                    <p>PROFILE</p>
                                </div>
                            </Link>
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
        </>
    )
}

export default Nav;