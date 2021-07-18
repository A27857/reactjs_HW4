import axios from "axios";
import React, { useEffect, useState } from "react";
const Profile = () => 
{
    useEffect(() => {
        document.title = "Profile Page"
    }, []);

    return (
        <div>
            <h3>Profile</h3>
        </div>
    )
}
export default Profile;