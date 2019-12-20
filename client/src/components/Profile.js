import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "./Loading";

function Profile(props) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            {!isAuthenticated && (
                <code>Please login to view profile</code>
            )}
            {isAuthenticated && (
                <>
                    <img src={user.picture} alt="" class="circle circleme"></img>
                    <h4>{user.nickname}</h4>
                    <code>{user.email}</code>
                </>
            )}
        </>
    )
}

export default Profile;