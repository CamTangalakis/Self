const getUser = async ({ username }) => {
  try {
    const response = await fetch(`/api/user/get/${username}`).then((res) =>
      res.json()
    );

    return response;
  } catch (err) {
    return err;
  }
};

const editUser = async ({
  username,
  password,
  userType,
  grade,
  school,
  district,
  avatar,
  specialEducation,
}) => {
  console.log(
    username,
    password,
    userType,
    grade,
    school,
    district,
    avatar,
    specialEducation
  );
  try {
    const response = await fetch(`/api/user/edit/${username}`, {
      method: "POST",
      body: JSON.stringify({
        password,
        userType,
        grade,
        school,
        district,
        avatar,
        specialEducation,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return response;
  } catch (err) {
    return err;
  }
};

export { getUser, editUser };
