import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row center">
                    <br />
                    {/* <br />
                    <br /> */}
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row center">
                        <h6 className="font-color">Built with React, Node, Express, Mongoose, and MaterializeCSS © RBF productions</h6>
                    {/* <h7>© RBF productions</h7> */}

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;