import express from 'express';
import { validateRequest } from './../../middlewares/validateRequest';
import { userRegisterValidationSchema } from './auth.validation';
import { authController } from './auth.controller';

const router = express.Router();

router.post('/register-account', validateRequest(userRegisterValidationSchema), authController.registerUser);
// router.post("/login",)
export const authRoute = router;
