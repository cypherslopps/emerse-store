import { z } from "zod";

export const signupSchema = z.object({
    name: z
        .string()
        .min(6, { message: "Full name must be at least 6 characters" })
        .refine(val => /[a-zA-Z\s]{6,}/ig, {
            message: "Please add your full name"
        }),
    email: z
        .string()
        .email({ message: "The email address format isn’t recongized" }),
    phone_no: z
        .string()
        .min(11, { message: "Mobile numer must be valid" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .refine(val => /[A-Za-z]/.test(val), {
            message: "Password must contain AlphaNumeric letters"
        })
        .refine(val => /[!@#$%^&*]{1,}/.test(val), {
            message: "Password must contain at least 2 special characters"
        }),
    confirmPassword: z.string() 
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
});