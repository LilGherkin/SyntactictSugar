import React from "react";
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Wall(props) {
    return (
        <>
            <div className="row center">
                <div className="textpost">
                    <div className="input-field">
                        <textarea id="textarea1" className="materialize-textarea" onChange={(event) => props.postContent(event.target.value)}></textarea>
                        <label for="textarea1">writeHere</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light blue" type="submit" name="action" onClick={props.postpost}>send it</button>
            </div>
            <div className="board z-depth-2">
                <ul className="collection">
                    {props.children}
                </ul>
            </div>
        </>
    )
}

export default Wall;