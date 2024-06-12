// controllers/usersController.js
import { handleValidationError } from "../middlewares/errorHandler.js";
import { Admin } from "../models/adminRegisterSchema.js";
import { Student, Teacher } from "../models/usersSchema.js";

export const adminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = await existingAdmin.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Admin signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    const existingStudent = await Student.findOne({ email });

    if (!existingStudent) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = await existingStudent.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Student signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const teacherSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    const existingTeacher = await Teacher.findOne({ email });

    if (!existingTeacher) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = await existingTeacher.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};
