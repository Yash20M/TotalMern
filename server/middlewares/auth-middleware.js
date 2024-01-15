const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      res.status(401).json({ msg: "Unathorized HTTP , token not provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware", jwtToken);

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
   

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    console.log("user middleware", error);
  }
};

module.exports = authMiddleware;
