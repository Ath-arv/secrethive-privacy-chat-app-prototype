const mongoose = require("mongoose");
const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    contentExpiration: { type: Date, expires: 0 },
  },
  {
    timestamps: true,
  }
);
messageSchema.index({ contentExpiration: 1 }, { expireAfterSeconds: 0 });
const Message = mongoose.model("Message", messageModel);
module.exports = Message;
