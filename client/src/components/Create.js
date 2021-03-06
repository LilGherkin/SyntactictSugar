import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "./Loading";

function Create(props) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <textarea id="textarea2" className="materialize-textarea" onChange={(event) => props.inputtitle(event.target.value)}></textarea>
            <label for="textarea2">projectTitle</label>
            <br />
            <textarea id="textarea1" className="materialize-textarea" onChange={(event) => props.input(event.target.value)}></textarea>
            <label for="textarea1">content</label>
            <br />
            <button className={props.button} type="submit" name="action" onClick={() => props.save(user)}>save</button>
        </>
    )
}

export default Create;