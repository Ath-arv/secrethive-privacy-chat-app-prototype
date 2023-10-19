const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, //id to that particular user
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId, //id to that particular user cause it depends on that
      ref: "Message", //msg model
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId, //id to that particular user
      ref: "User",
    },
  },
  {
    timestamps: true, //everytime a new chat is created mongoose creats a timestamp
  }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
