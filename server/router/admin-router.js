const express = require("express");
const adminController = require("../controllers/admin-controller");
const adminMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.route("/users").get(adminMiddleware, adminController.getAllUsers);
router.route("/contacts").get(adminController.getAllContacts);

module.exports = router;
