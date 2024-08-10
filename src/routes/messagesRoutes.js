import express from 'express';
import { createChat } from '../controllers/messages/messagesController.js';

const router = express.Router();

router.post("/chats", createChat);

export default router;