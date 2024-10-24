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
    }).then(async (res) => {
      if (!res.ok) {
        return res.text();
      }

      const data = await res.json();
      localStorage.setItem("token", data.data.token);
    });
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
  console.log(result);
};

const checkRegisterUsername = async ({ username }) => {
  const result = await fetch("/registerUsername", {
    method: "GET",
    body: JSON.stringify({
      username,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(result);
};

export { loginUser, registerUser, checkRegisterUsername };
