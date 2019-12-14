import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="grey page-footer">
            <div className="container">
                <div className="row center">
                    <br />
                    <h6>© RBF productions</h6>
                    <br />
                    <br />
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row center">
                        <h6>Built with React, Node, Express, Mongoose, and MaterializeCSS</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;