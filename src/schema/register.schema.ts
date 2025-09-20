

import { z } from 'zod'
export const registerSchema = z.object({
  name: z.string().nonempty('this field cant be empty').min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  rePassword: z.string(),
  phone: z.string().regex(/^01[0251][1-9]{8}$/),
}).refine((data) => data.password === data.rePassword, {
  error: 'Passwords do not match',
  path: ['rePassword'],
})


 export  type registerSchemaType=z.infer<typeof registerSchema>