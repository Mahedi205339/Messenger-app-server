import express from 'express';
import { createChat } from '../controllers/messages/messagesController';

const router = express.Router();

router.post("/chats", createChat);

export default router;