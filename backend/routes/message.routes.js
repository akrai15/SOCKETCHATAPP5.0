import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute  from '../middlewares/protectRoute.js';
import { getMessages } from '../controllers/message.controller.js';
const router=express.Router();

router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessages);


export default router;
