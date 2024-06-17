const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name required"],
    },
    email: {
      type: String,
      required: [true, "Full name required"],
      unique: [true, "unique email id is required"],
    },
    password: {
      type: String,
      required: [true, "Full name required"],
    },
    avatar: {
      type: String,
      // required:[true,"Full name required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

module.exports = mongoose.model("User", userSchema);
