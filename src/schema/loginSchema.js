
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string(1,{message:"Email is required"}).email({message:"invalid email"}),
    password: z.string().min(1,{message: "Password is requied"}),

})