const express = require("express");
const {
  create,
  verifyEmail,
  resendEmailVerificationToken,
} = require("../controllers/user");
const { userValidtor, validate } = require("../middlewares/validator");

const router = express.Router();

router.post("/create", userValidtor, validate, create);
router.post("/verify-email", verifyEmail);
router.post("/resend-email-verification-token", resendEmailVerificationToken);

module.exports = router;
