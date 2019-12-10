import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

function Userpost(props) {
    return (
        <>
            <li class="collection-item avatar">
                <img src="images/yuna.jpg" alt="" class="circle" />
                <span class="title">Title</span>
                <p>First Line
                    Second Line
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        </>
    )
}

export default Userpost;