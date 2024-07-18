const userRegister = (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    console.log(fullName, email, phone, password);

    return res.send({ message: "everything is ok" });
  } catch (error) {
    console.log(error);
  }
};
const userLogin = (req, res) => {
  const { email, password } = req.body;
  console.log(fullName, email, phone, password);

  return res.send({ message: "everything is ok" });
};

const userProfile = (req, res) => {
  return res.send("everything is ok");
};

const userUpdate = (req, res) => {
  return res.send("everything is ok");
};

module.exports = { userRegister, userLogin, userProfile, userUpdate };
