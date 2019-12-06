import React from "react";
// import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Wall(props) {
    return (
        <>
            <ul class="collection">
                <li class="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" class="circle" />
                    <span class="title">Title</span>
                    <p>First Line
                        Second Line</p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
            </ul>
        </>
    )
}

export default Wall;