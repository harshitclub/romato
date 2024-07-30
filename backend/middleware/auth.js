const jwt = require("jsonwebtoken");

const isLogin = async (req, res, next) => {
  try {
    const token = req.cookies.romatoToken;
    if (!token) {
      return res.status(401).send({ message: "You need to login first" });
    }

    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).send({ message: "You need to login first" });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isLogin };
