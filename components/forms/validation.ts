import { z } from "zod";

export const ContactSchema = z.object({
  message: z.string().min(1, { message: "message cannot be blank" }),
  email: z
    .string()
    .email({
      message: "Invalid Email",
    })
    .min(1, {
      message: "email cannot be blank",
    }),
});
