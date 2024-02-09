import { z } from 'zod';

export const FormSchema = z.object({
  email: z.string().describe('Email').email({ message: 'Invalid Email' }),
  password: z.string().describe('Password').min(1, 'Password is required'),
});
<<<<<<< HEAD
 
=======
>>>>>>> 4bf312325d0326fb35fccf6594cbbca6a7cfc182
