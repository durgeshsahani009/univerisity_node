import * as studentService from "../services/students.service.js";



export const addStudent = async (req, res) => {
  try {
    await studentService.addStudent(req.body);
    res.status(200).json({ status: "success", msg: "Student added successfully" })
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      res.status(403).json({ status: "fail", msg: "ID is required" });
    }
    await studentService.updateStudent(req.body);
    res.status(200).json({ status: "success", msg: "Students updated successfully", data: [] })
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

export const getAllStudent = async (req, res) => {
  try {
    const student = await studentService.getAllStudent();
    res.status(200).json({ status: "success", msg: "Student fetched successfully", data: student })
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      res.status(403).json({ status: "fail", msg: "ID is required" });
    }
    const student = await studentService.getStudentById(id);
    if (!student) {
      return res.status(403).json({ status: "fail", msg: "Student record no found" });
    }
    res.status(200).json({ status: "success", msg: "Student fetched successfully", data: student })
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

export const deleteStudentById = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id)
    if (!id) {
      res.status(403).json({ status: "fail", msg: "ID is required" });
    }
    const student = await studentService.deleteStudentById(id);
    res.status(200).json({ status: "success", msg: "Student deleted successfully", data: student })
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}