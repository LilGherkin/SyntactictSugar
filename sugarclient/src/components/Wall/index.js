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
                    <div class="input-field">
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">writeHere</label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light blue" type="submit" name="action">post</button>
            </div>
            <div className="board z-depth-2">
                <ul class="collection">
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <li class="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" class="circle" />
                        <span class="title">Title</span>
                        <p>First Line
                        Second Line</p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Wall;