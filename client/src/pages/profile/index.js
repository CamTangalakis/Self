import React from "react";
import { editUser, getUser } from "../../hooks/user.js";
import "./index.css";

const Profile = ({ currentUser }) => {
  const [userInfo, setUserInfo] = React.useState({
    username: "ethsf",
    password: "",
    userType: "",
    grade: "",
    school: "",
    district: "",
    avatar: "",
    specialEducation: false,
  });
  const [isEditing, setIsEditing] = React.useState(false);

  React.useEffect(() => {
    const getUserInfo = async () => {
      const info = await getUser({ username: "ethsf" });
      setUserInfo({ userInfo, ...info });
    };
    getUserInfo();
  }, [userInfo]);

  const editUserInfo = async (e) => {
    e.preventDefault();
    console.log(userInfo, "<<<*****");
    try {
      await editUser(userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  // TODO: only avatar editing is working, fix other fields

  const editingPortal = () => {
    if (isEditing) {
      return (
        <div className="editingPortalContainer">
          <label className="editingLabel">
            username
            <input
              className="editingInput"
              type="text"
              name="username"
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
            />
          </label>
          <label className="editingLabel">
            avatar
            <input
              className="editingInput"
              type="text"
              name="avatar"
              onChange={(e) =>
                setUserInfo({ ...userInfo, avatar: e.target.value })
              }
              value={userInfo.avatar}
            />
          </label>
          {userInfo.userType === "student" && (
            <div>
              <label className="editingLabel">
                grade
                <input
                  className="editingInput"
                  type="text"
                  name="grade"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, grade: e.target.value })
                  }
                  value={userInfo.grade}
                />
              </label>
              <label className="editingLabel">
                specialEducation
                <input
                  className="editingInput"
                  type="text"
                  name="specialEducation"
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      specialEducation: e.target.value,
                    })
                  }
                  value={userInfo.specialEducation}
                />
              </label>
            </div>
          )}
          {(userInfo.userType === "educator" ||
            userInfo.userType === "student") && (
            <label className="editingLabel">
              school
              <input
                className="editingInput"
                type="text"
                name="school"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, school: e.target.value })
                }
                value={userInfo.school}
              />
            </label>
          )}
          <label className="editingLabel">
            district
            <input
              className="editingInput"
              type="text"
              name="district"
              onChange={(e) =>
                setUserInfo({ ...userInfo, district: e.target.value })
              }
              value={userInfo.district}
            />
          </label>

          <button
            type="submit"
            className="editUserButton"
            onClick={(e) => editUserInfo(e)}
          >
            Save Changes
          </button>
        </div>
      );
    }
  };

  if (!currentUser) return <div>Loading...</div>;

  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="header">Welcome, {currentUser}</div>

      {editingPortal()}

      <div
        style={{ cursor: "pointer" }}
        onClick={() => setIsEditing(!isEditing)}
      >
        edit profile
      </div>
      <div>view grades</div>
    </div>
  );
};

export default Profile;
