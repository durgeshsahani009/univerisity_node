import student from "../models/student.model.js"
export const addStudent = async (data)=> await student.create(data);
export const updateStudent = async (data)=> await student.findByIdAndUpdate(data.id, data, {new:true});
export const getAllStudent = async ()=> await student.find();
export const getStudentById = async (data)=> await student.findById(data);
export const deleteStudentById = async (data)=> await student.findByIdAndDelete(data);
