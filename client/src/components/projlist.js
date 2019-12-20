import React from "react";

function Projlist(props) {
    return (
        <tr>
            {/* <td></td>{props.user}</a></td> */}
            <td><a href="#" id={props.projtitle} class={props.user} onClick={() => props.selectProj(props)}>{props.projtitle}</a></td>
        </tr>
    )
}

export default Projlist;