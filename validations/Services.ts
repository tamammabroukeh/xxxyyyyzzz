import { z } from "zod";

export const ServiceSchema = z.object({
  id: z.number().int().positive(),
  text: z.string().min(5, { message: "Must be 5 or more characters long" }),
});
export type User = z.infer<typeof ServiceSchema>;
