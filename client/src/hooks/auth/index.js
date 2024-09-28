const loginUser = async ({ username, password }) => {
  const result = await fetch("/api/auth/login", {
    method: "POST",
    body: {
      username: username,
      password: password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => localStorage.setItem("token", data.data.token))
    .catch((err) => console.log(err));
  console.log(result);
};

const registerUser = async ({ username, password }) => {
  const result = await fetch("/register", {
    method: "POST",
    body: {
      username: username,
      password: password,
      createdAt: new Date(),
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(result);
};

export { loginUser, registerUser };
