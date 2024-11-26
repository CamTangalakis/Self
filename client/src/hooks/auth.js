const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return response;
  } catch (err) {
    console.log(err);
  }
};

const registerUser = async ({
  username,
  password,
  userType,
  grade,
  school,
  district,
  state,
  avatar,
  specialEducation,
}) => {
  const result = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      userType,
      grade,
      school,
      district,
      state,
      avatar,
      specialEducation,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return result;
};

const logoutUser = async (username) => {
  const result = await fetch(`/api/auth/logout/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return result;
};

const checkRegisterUsername = async (username) => {
  const result = await fetch(`/api/user/getUsername/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return result;
};

export { loginUser, registerUser, logoutUser, checkRegisterUsername };
