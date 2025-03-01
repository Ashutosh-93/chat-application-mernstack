import { Router } from "express";
import { GetOtherUsers, Login, Register } from "../controllers/user.controller";

const router = Router()

router.route('/chat-more/user/login').get(Login)
router.route('/chat-more/user/register').get(Register)
router.route('/chat-more/user/otherusers').get(GetOtherUsers)