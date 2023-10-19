const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    ip_add: { type: String, required: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      required: true,
      default:
        " https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userModel);
module.exports = user;
