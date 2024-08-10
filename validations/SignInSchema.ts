import { z } from "zod";

const SignInSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is required, You entered invalid email address" }),
  password: z.string().min(8, {
    message: "Password is required, should contain at least 8 characters",
  }),
});

type SignInType = z.infer<typeof SignInSchema>;
export { SignInSchema, type SignInType };
