import React from "react";

const Profile = ({ currentUser }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      Welcome, {currentUser}
      <div>edit profile</div>
      <div> view grades</div>
    </div>
  );
};

export default Profile;
