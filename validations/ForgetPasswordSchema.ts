import { z } from "zod";

const ForgetPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is required, You entered invalid email address" }),
});

type ForgetPasswordType = z.infer<typeof ForgetPasswordSchema>;
export { ForgetPasswordSchema, type ForgetPasswordType };
