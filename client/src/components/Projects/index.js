import React from "react";
import "./style.css";

function Projects(props) {
    return (
        <>
            <div className="title">
                <div className="center">
                    <p>{props.title}</p>
                </div>
                <table className="striped">
                    <tbody>{props.children}</tbody>
                </table>
            </div>
        </>
    )
};

export default Projects;