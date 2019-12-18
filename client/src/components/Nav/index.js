import React from "react";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa";
import Loading from "../../components/Loading";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Nav = () => {
    // Auth0 start
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
     const { loading } = useAuth0();
     if (loading) {
         return <Loading />;
     }
    return (
        <>
            <div className="boxinternal">
                <div className="center-align">
                    <div className="scene">
                        <div className="box center-align">
                            <div className="front face center-align" id="org">
                                <img className="plane" src="/img/home-page-icon.png" />
                                <i className="fas fa-home"></i>
                            </div>
                            <Link to="/home">
                                <div className="circle right face" href="/home">
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
                                <div className="circle right face center-align">
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
                            <Link to="/home">
                                {!isAuthenticated && (<div className="circle right face" onClick={() => loginWithRedirect({})}>
                                    <p>LOGIN</p>
                                </div>)}
                                {isAuthenticated && (<div className="circle right face" onClick={() => logout()}>
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