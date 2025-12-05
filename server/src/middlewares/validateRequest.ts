import { ZodObject } from 'zod';

export const validateRequest = (schema: ZodObject) => {
  return  (req: any, res: any, next: any) => {
    try {
     schema.parse(req.body);
      next();
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        error: error.errors,
      });
    }
  };
};
