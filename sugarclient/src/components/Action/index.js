import React from "react";
// import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Action(props) {
    return (
        <>
            <h4 className="center">Stuff</h4>
            <div className="col l3">
                <div className="center promo promo-example">
                    <i className="large material-icons">things</i>
                    <h5 className="promo-caption">
                        <a href="#" target="_blank">Link</a>
                    </h5>
                </div>
            </div> */}
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className="large material-icons">link</i>
                    <h5 className="promo-caption">projects</h5>
                    <p className="light center"></p>
                </div>
            </div>
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className=" large material-icons">work</i>
                    <h5 className="promo-caption"><a href="#" target=" blank">link</a></h5>
                </div>
            </div>
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className=" large material-icons">stuff</i>
                    <h5 className="promo-caption"><a href="#" target="_blank">link</a></h5>
                    <p className="light center"></p>
                </div>
            </div>
        </>
    )
}

export default Action;