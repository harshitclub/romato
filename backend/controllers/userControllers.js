const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if ((!fullName, !email, !password)) {
      return res
        .status(406)
        .send({ message: "Full Name, Email and Password must be required" });
    }

    // check if email already exists in database or not
    const checkExistingUser = await User.findOne({ email: email });

    if (checkExistingUser) {
      return res.status(406).send({ message: "Email already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      fullName: fullName,
      email: email,
      phone: phone,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(201).send({
      message: "User registered successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email && !password) {
      return res
        .status(406)
        .send({ message: "email and password must be required" });
    }
    // check if email already exists in database or not
    const checkExistingUser = await User.findOne({ email: email });

    if (!checkExistingUser) {
      return res.status(404).send({ message: "User not found" });
    }
    const checkPassword = await bcrypt.compare(
      password,
      checkExistingUser.password
    );

    if (!checkPassword) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const tokenData = {
      _id: checkExistingUser._id,
      email: checkExistingUser.email,
    };

    // now creating jsonwebtoken
    const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("romatoToken", jwtToken, {
      expires: new Date(Date.now() + 9000000),
      httpOnly: true,
    });

    return res.send({
      message: "Logged In",
      success: true,
      user: checkExistingUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const userProfile = async (req, res) => {
  try {
    const token = req.cookies.romatoToken;

    if (!token) {
      return res
        .status(401)
        .send({ message: "Invalid Token or Token Not Found" });
    }

    const verifiedUser = await verifyAndFindUser(token);

    if (!verifiedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).json({ message: "User found", user: verifiedUser });
  } catch (error) {
    console.log(error);
  }
};

async function verifyAndFindUser(token) {
  const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
  const findUserLean = await User.findById(verifyToken._id).lean();
  return findUserLean;
}

const userUpdate = async (req, res) => {
  try {
    const token = req.cookies.romatoToken;

    if (!token) {
      return res
        .status(401)
        .send({ message: "Invalid Token or Token Not Found" });
    }

    const { fullName, phone } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({ message: "Atleast one field is required" });
    }

    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    const updateUser = await User.findByIdAndUpdate(verifyToken._id, {
      fullName: fullName,
      phone: phone,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userRegister, userLogin, userProfile, userUpdate };
