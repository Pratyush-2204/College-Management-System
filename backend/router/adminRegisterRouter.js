import express from "express";


console.log('Loading controllers from:', '../controllers/usersController.js');
import { adminSignIn, studentSignIn, teacherSignIn } from '../controllers/usersController.js';
console.log('Controllers loaded successfully');

const router = express.Router();

router.post('/admin/signin', adminSignIn);
router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);

export default router;
