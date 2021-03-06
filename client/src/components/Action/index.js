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
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className="small material-icons">things</i>
                    <h5 className="promo-caption">
                        <a href="#" target="blank">Link</a>
                    </h5>
                </div>
            </div>
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className="small material-icons">link</i>
                    <h5 className="promo-caption">projects</h5>
                    <p className="light center"></p>
                </div>
            </div>
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className="small material-icons">work</i>
                    <h5 className="promo-caption"><a href="#" target="blank">link</a></h5>
                </div>
            </div>
            <div className="col s12 m6 l3">
                <div className="center promo promo-example">
                    <i className="small material-icons">stuff</i>
                    <h5 className="promo-caption"><a href="#" target="blank">link</a></h5>
                    <p className="light center"></p>
                </div>
            </div>
        </>
    )
}

export default Action;