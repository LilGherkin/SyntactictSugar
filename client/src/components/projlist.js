import React from "react";

function Projlist(props) {
    return (
        <tr>
            <td><p>{props.user}</p></td>
            <td>{props.projtitle}</td>
        </tr>
    )
}

export default Projlist;