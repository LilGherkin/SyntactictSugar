import React from "react";
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Projects(props) {
    return (
        <>
            <div className="title">
                <div className="center">
                    <p>coolProjects</p>
                </div>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Projects;