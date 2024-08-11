import expressAsyncHandler from "express-async-handler";
import Chat from "../../models/messages/Chat.js";

export const createChat = expressAsyncHandler(async (req, res) => {
//adding chat schema :-

  try {
    const newChat = new Chat({
      participants: [req.body.senderId, req.body.receiveId],
    });

    const chat = await newChat.save()
    res.status(200).json(chat);

  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
})