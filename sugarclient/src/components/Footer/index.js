import React from "react";
// import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Footer() {
    return (
        <footer className="grey page-footer">
            <div className="container">
                <div className="row center">
                    <p>sytactictsugar</p>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row center">
                        <p>© yeehaw</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;