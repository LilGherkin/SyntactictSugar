import React from "react";

function Userpost(props) {
    return (
        <>
            <li className="collection-item avatar">
                <img src={props.img} alt="" class="circle circleme" />
                <span className="title">{props.username}</span>
                <p>{props.text}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </>
    )
}

export default Userpost;