import express from "express";
import * as studentController  from "../controllers/students.controller.js"

const router = express.Router();
router.post("/add", studentController.addStudent);
router.post("/update", studentController.updateStudent);
router.post("/getAll", studentController.getAllStudent);
router.post("/getById", studentController.getStudentById);
router.post("/delete", studentController.deleteStudentById);

export default router;