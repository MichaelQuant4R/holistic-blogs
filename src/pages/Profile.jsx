import React from "react";
import {useParams} from "react-router-dom";

const Profile = props => {
    
    
    const {username} = useParams();
    
    return (
    
    
    
        <div>
    
            <h4>This is a profile page</h4>
            
            <h4>Username: {username}</h4>
        </div>
    
    );
    
};

export default Profile;