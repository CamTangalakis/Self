import React from "react";
import { registerUser, checkRegisterUsername } from "../hooks/auth";
import "./index.css";
import { searchDistricts } from "../hooks/external_calls";

const SignUpPage = ({ setCurrentUser }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    userType: "",
    grade: "",
    school: "",
    state: "",
    district: "",
    avatar: "",
    specialEducation: false,
  });
  const [usernameMessage, setUsernameMessage] = React.useState("");
  const [error, setError] = React.useState({
    message: "",
    field: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setCurrentUser(formData.username);
    } catch (err) {
      console.log(err);
      setError({ message: err, field: "all" });
    }
  };

  const setDistrict = async (dis) => {
    setFormData({ ...formData, district: dis });
    console.log(formData.state, dis, "<<<<automcomplete client");

    if (!formData.state) {
      setError({ message: "Please enter state", field: "state" });
      return;
    }
    const districtList = await searchDistricts(dis, formData.state);

    console.log(districtList);
  };

  const displayError = (field) => {
    if (error.field === field) {
      return <div>{error.message}</div>;
    }
  };

  const checkUsernameAvailable = async (username) => {
    const res = await checkRegisterUsername(username);
    setUsernameMessage(res);
  };

  const renderFormExtension = () => {
    if (formData.userType === "student") {
      return (
        <div>
          <div className="inputContainer">
            <label className="inputLabel" htmlFor="grade">
              What grade are you in?
            </label>
            <input
              type="text"
              value={formData.grade}
              required
              name="grade"
              onChange={(e) =>
                setFormData({ ...formData, grade: e.target.value })
              }
              placeholder="Enter grade"
              display="none"
              className="input"
            />

            {displayError("grade")}
          </div>

          <div className="inputContainer">
            <label className="inputLabel" htmlFor="state">
              What state do you live in?
            </label>
            <input
              type="text"
              value={formData.state}
              required
              name="state"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              placeholder="Enter state"
              display="none"
              className="input"
            />

            {displayError("state")}
          </div>

          <div className="inputContainer">
            <label className="inputLabel" htmlFor="district">
              What district do you live in?
            </label>
            <input
              type="text"
              value={formData.district}
              required
              name="district"
              placeholder="Enter district"
              display="none"
              className="input"
              onChange={(e) => setDistrict(e.target.value)}
            />

            {displayError("district")}
          </div>

          <div className="inputContainer">
            <label className="inputLabel" htmlFor="school">
              What school do you attend?
            </label>
            <input
              type="text"
              value={formData.school}
              required
              name="school"
              onChange={(e) =>
                setFormData({ ...formData, school: e.target.value })
              }
              placeholder="Enter school"
              display="none"
              className="input"
            />

            {displayError("school")}
          </div>
        </div>
      );
    } else if (formData.userType === "administrator") {
      return (
        <div>
          <div className="inputContainer">
            <label className="inputLabel" htmlFor="state">
              What state do you live in?
            </label>
            <input
              type="text"
              value={formData.state}
              required
              name="state"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              placeholder="Enter state"
              display="none"
              className="input"
            />

            {displayError("state")}
          </div>

          <div className="inputContainer">
            <label className="inputLabel" htmlFor="district">
              What district do you represent?
            </label>
            <input
              type="text"
              value={formData.district}
              required
              name="district"
              onChange={(e) =>
                setFormData({ ...formData, district: e.target.value })
              }
              placeholder="Enter district"
              display="none"
              className="input"
            />
          </div>
        </div>
      );
    } else if (formData.userType === "parent") {
      return (
        <div>
          <div className="inputContainer">
            <label className="inputLabel" htmlFor="state">
              What state do you live in?
            </label>
            <input
              type="text"
              value={formData.state}
              required
              name="state"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              placeholder="Enter state"
              display="none"
              className="input"
            />

            {displayError("state")}
          </div>

          <div className="inputContainer">
            <label className="inputLabel" htmlFor="district">
              What district do your children belong to?
            </label>
            <input
              type="text"
              value={formData.district}
              required
              name="district"
              onChange={(e) =>
                setFormData({ ...formData, district: e.target.value })
              }
              placeholder="Enter district"
              display="none"
              className="input"
            />
          </div>
        </div>
      );
    } else if (formData.userType === "educator") {
      return (
        <div>
          <div className="inputContainer">
            <label className="inputLabel" htmlFor="state">
              What state do you live in?
            </label>
            <input
              type="text"
              value={formData.state}
              required
              name="state"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              placeholder="Enter state"
              display="none"
              className="input"
            />

            {displayError("state")}
          </div>

          <div className="inputContainer">
            <label className="inputLabel" htmlFor="district">
              What district do you belong to?
            </label>
            <input
              type="text"
              value={formData.district}
              required
              name="district"
              onChange={(e) =>
                setFormData({ ...formData, district: e.target.value })
              }
              placeholder="Enter district"
              display="none"
              className="input"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="signupContainer">
      <h1>Register User</h1>
      <form className="formContainer">
        <div className="inputContainer">
          <label className="inputLabel" htmlFor="username">
            Choose a unique username
          </label>
          <input
            type="text"
            value={formData.username}
            required
            name="username"
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
              checkUsernameAvailable(e.target.value);
            }}
            placeholder="Enter username"
            display="none"
            className="input"
          />
          {usernameMessage && <div>{usernameMessage}</div>}
        </div>

        <div className="inputContainer">
          <label className="inputLabel" htmlFor="password">
            Choose a password
          </label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
            className="input"
          />
        </div>

        <div className="inputContainer">
          <label className="inputLabel" htmlFor="userType">
            What kind of user are you?
          </label>
          <select
            name="userType"
            className="selectInput"
            onChange={(e) =>
              setFormData({ ...formData, userType: e.target.value })
            }
            value={formData.userType}
          >
            <option value="" className="selectPlaceholder" disabled>
              Choose user type...
            </option>
            <option value="student">Student</option>
            <option value="educator">Educator</option>
            <option value="administrator">Administrator</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="inputContainer">
          <label className="inputLabel" htmlFor="avatarUpload">
            Choose an avatar, if you want
          </label>
          <input
            name="avatarUpload"
            type="file"
            className="imageInput"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, avatar: e.target.value })
            }
          />
        </div>

        {formData.userType && renderFormExtension()}

        {displayError("all")}

        <div>
          <div>
            <button
              type="submit"
              className="formButton"
              onClick={(e) => handleSignup(e)}
            >
              Register
            </button>
            <button type="button" className="formButton" href="/">
              Cancel
            </button>
          </div>

          <div>
            Already registered?{" "}
            <a className="link" href="/login">
              Log In
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
