import React from 'react'
import "./UserProfile.css";
function UserProfile({name,photoURL}) {
  return (
    <div className="user-profile">
    {/*img of user */}
    <div className="user-image">
    <img src="./user.png" alt=""/>
    </div>
    {/*name of user */}
    <div className="user-info">
    <p className="user-name">{name}</p>
    </div>
    </div>
  );
}

export default UserProfile;