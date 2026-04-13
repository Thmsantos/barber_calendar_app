import { z } from "zod";

export const clientSchema = z.object({
  clientName: z.string(),
  procces: z.string(),
});

export const appointmentSchema = z.object({
  _id: z.string().optional(),
  barberId: z.string(),
  description: z.string(),
  day: z.string(),
  hour: z.string(),
  client: clientSchema,
});