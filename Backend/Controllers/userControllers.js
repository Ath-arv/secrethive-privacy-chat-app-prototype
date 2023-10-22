const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          // { _id: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } }); //not Same user
  res.send(users);
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const ip_add = req.socket.remoteAddress;
  if (!name || !ip_add || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  const userExists = await User.findOne({ name });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    ip_add,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      ip_add: user.ip_add,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      ip_add: user.ip_add,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Name or Password");
  }
});
module.exports = { registerUser, authUser, allUsers };
