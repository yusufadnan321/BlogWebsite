import { z } from "zod"

export const formSchema = z.object({
    firstName:z.string().min(1,{message:"You need to fill this"}),
    lastName: z.string().min(1,{message:"You need to fill this"}),
    email: z.string().min(1,{message:"You need to fill this"}),
    password:z.string().min(5,{ message:"Not strong enough"}),
    number: z.string().min(11,{message:"incorrect number"}),
})