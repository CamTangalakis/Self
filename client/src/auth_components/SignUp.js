import React from "react";
import { registerUser, checkRegisterUsername } from "../hooks/auth";
import { searchDistricts, searchSchools } from "../hooks/external_calls";
import { States } from "../utils";
import "./index.css";

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
  const [districtList, setDistrictList] = React.useState([]);
  const [schoolList, setSchoolList] = React.useState([]);
  const [stateList, setStateList] = React.useState([]);
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

  const setState = (term) => {
    setError({ message: "", field: "" });
    setFormData({ ...formData, state: term });

    const stList = States.filter((state) =>
      state.name.toLocaleLowerCase().includes(term)
    );
    setStateList(stList);
  };

  const setDistrict = async (dis) => {
    setFormData({ ...formData, district: dis });
    setError({ message: "", field: "" });

    if (!formData.state) {
      setError({ message: "Please enter state", field: "state" });
      return;
    }
    const state = States.filter(
      (state) =>
        state.name.toLocaleLowerCase() === formData.state.toLocaleLowerCase()
    );
    const disList = await searchDistricts(dis, state[0].code);

    setDistrictList(disList.districtList);
  };

  const setSchool = async (term) => {
    setFormData({ ...formData, school: term });
    setError({ message: "", field: "" });

    if (!formData.state) {
      setError({ message: "Please enter state", field: "state" });
      return;
    }
    const state = States.filter(
      (state) =>
        state.name.toLocaleLowerCase() === formData.state.toLocaleLowerCase()
    );
    const schList = await searchSchools(term, state[0]?.code);
    setSchoolList(schList.schoolMatches);
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
            <label className="inputLabel" htmlFor="sped">
              <input
                className="input"
                type="checkbox"
                checked={formData.specialEducation}
                value={formData.specialEducation}
                onClick={() =>
                  setFormData({
                    ...formData,
                    specialEducation: !formData.specialEducation,
                  })
                }
              />
              Please click here if you are enrolled in a Special Education
              program
            </label>
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
              onChange={(e) => {
                setState(e.target.value);
              }}
              placeholder="Enter state"
              display="none"
              className="input"
              list="state"
            />
            <datalist id="state">
              {stateList?.length &&
                stateList.map((state) => (
                  <option value={state.name} key={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </datalist>

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
              list="district"
            />
            <datalist id="district">
              {districtList?.length &&
                districtList.map((dis) => (
                  <option value={dis.districtName} key={dis.ditrictID}>
                    {dis.districtName}
                  </option>
                ))}
            </datalist>

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
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Enter school"
              display="none"
              className="input"
              list="school"
            />
            <datalist id="school">
              {schoolList?.length &&
                schoolList.map((school) => (
                  <option value={school.schoolName} key={school.schoolId}>
                    {school.schoolName}
                  </option>
                ))}
            </datalist>

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

          <div className="formRedirect">
            Already registered?{" "}
            <a className="redirectLink" href="/login">
              Log In
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
