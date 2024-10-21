import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(3, { message: "Content must be more than 3 characters" })
    .max(100, { message: "Content must not exceed 100 characters" }),
});
