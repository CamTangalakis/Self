import React from "react";
import { registerUser } from "../hooks/auth";
import "./index.css";

const SignUpPage = ({ setCurrentUser }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    userType: "",
    grade: "",
    school: "",
    district: "",
    avatar: "",
    specialEducation: false,
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setCurrentUser(formData.username);
    } catch (err) {
      console.log(err);
    }
  };

  const renderFormExtension = () => {
    if (formData.userType == "student") {
      return (
        <div>
          <div className="inputContainer">
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
          </div>

          <div className="inputContainer">
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
          </div>

          <div className="inputContainer">
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
    } else if (formData.userType == "administrator") {
      return (
        <div>
          <div className="inputContainer">
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
    } else if (formData.userType == "parent") {
      return (
        <div>
          <div className="inputContainer">
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
    } else if (formData.userType == "educator") {
      return (
        <div>
          <div className="inputContainer">
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
          <input
            type="text"
            value={formData.username}
            required
            name="username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Enter username"
            display="none"
            className="input"
          />
        </div>

        <div className="inputContainer">
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
          <select
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

        {formData.userType && renderFormExtension()}

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
