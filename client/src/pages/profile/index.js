import React from "react";
import { editUser, getUser } from "../../hooks/user";

const Profile = ({ currentUser }) => {
  const [userInfo, setUserInfo] = React.useState({
    username: "hello",
    password: "",
    userType: "",
    grade: "",
    school: "",
    district: "",
    state: "",
    avatar: "",
    specialEducation: false,
  });

  const getUserInfo = async () => {
    const info = await getUser({ username: "hello" });
    setUserInfo({ ...userInfo, info });
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);

  const editUserInfo = async () => {
    await editUser(userInfo);
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      Welcome, {currentUser}
      <div>edit profile</div>
      <div>view grades</div>
    </div>
  );
};

export default Profile;
