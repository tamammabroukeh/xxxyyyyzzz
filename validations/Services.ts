import { z } from "zod";

export const ServiceSchema = z.object({
  text: z.string().min(5, {
    message: "The text must contain at least 5 words, please Try again!",
  }),
});
export type ServiceType = z.infer<typeof ServiceSchema>;
