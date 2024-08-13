import { z } from "zod";

const NewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "Password is required, should contain at least 8 characters",
      })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmpassword: z
      .string()
      .min(1, { message: "Confirm Password doesn`t match the password" }),
  })
  .refine((input) => input.password === input.confirmpassword, {
    message: "Password and confirm password doesn`t match",
    path: ["confirmpassword"],
  });

type NewPasswordType = z.infer<typeof NewPasswordSchema>;
export { NewPasswordSchema, type NewPasswordType };
