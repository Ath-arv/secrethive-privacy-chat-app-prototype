const asyncHandler = require("express-async-handler");
const Message =require("../models/messageModel");
const sendMessage = asyncHandler(async(req,res)=>{
    const {content,chatId} =req.body;
    if(!content || !chatId)
    {
        console.log("Invalid data passed into the request");
        return res.sendStatus(400);
    }
    var newMessage = {
      sender:req.user_id,
      content:content, 
      chat:chatId
    };
    try {
        var message = await Message.crete(newMessage);
        message = await Message.populate(message, [
            { path: "sender", select: "name pic" },
            { path: "chat", populate: { path: "users", select: "name pic email" } },
          ]);
          message=await User.populate(message,{
            path:"chat.users",
            select:"name pic",
          });

          await Chat.findByIdAndUpdate(req.body.chatId,{
            latestMessage : message,
          });
          res.json(message);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
        
    }
});
module.exports = {sendMessage};