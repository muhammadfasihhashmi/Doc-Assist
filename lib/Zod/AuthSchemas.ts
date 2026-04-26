import { z } from "zod";

//Common reusable validators
const email = z.string().email({ message: "Invalid email address" });

const password = z
  .string()
  .min(6, { message: "Password must be at least 6 characters" });

const fullName = z
  .string()
  .min(2, { message: "Name must be at least 2 characters" });

const phone = z.string().min(10, { message: "Phone number is too short" });

//Register Schema
export const RegisterFormSchema = z
  .object({
    fullName,
    email,
    phone,
    password,
    confirmPassword: password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

//Login Schema
export const LoginFormSchema = z.object({
  email,
  password,
});

//Forgot Password Schema
export const ForgotPasswordFormSchema = z.object({
  email,
});

//Types (auto-inferred)
export type RegisterFormType = z.infer<typeof RegisterFormSchema>;
export type LoginFormType = z.infer<typeof LoginFormSchema>;
export type ForgotPasswordFormType = z.infer<typeof ForgotPasswordFormSchema>;
