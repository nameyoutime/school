const { Schema } = require("mongoose");
const ROLE = require("../src/constant/role");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    passWord: {
      type: String,
      required: true,
    },
    role: {
      // 0: admin
      // 1: user
      type: String,
      default: ROLE.USER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
