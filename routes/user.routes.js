import express from "express";
import * as userController from "../controllers/user.controller"; 

const router = express.Router();
router.get("/", (req, res) => { res.send("user module running!") });

export default router;
