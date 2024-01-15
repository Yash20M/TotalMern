const express = require("express");
const authController = require("../controllers/auth-controller");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const validationsSchema = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authController.home);

router
  .route("/register")
  .post(validate(validationsSchema.signupSchema), authController.register);

router
  .route("/login")
  .post(validate(validationsSchema.loginSchema), authController.login);

router.route("/user").get(authMiddleware, authController.user);

module.exports = router;
