const express = require("express");
const { chats } = require("./data/data");

const app = express();
app.get("/api/chat",(req,res)=>{

    res.send(chats);
});

app.get("/api/chat/:id",(req,res)=>{
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});


app.listen(3000,()=>{
    console.log('Active');});