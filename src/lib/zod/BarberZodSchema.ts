import { z } from "zod";

export const weekDaySchema = z.enum([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);

export const workScheduleSchema = z.object({
  itWorks: z.boolean(),
  startTime: z.string(),
  endTime: z.string(),
});

export const clientSchema = z.object({
  clientName: z.string(),
  procces: z.string(),
});

export const markedSchema = z.object({
  day: z.string(),
  hour: z.string(),
  client: clientSchema,
});

export const daysOfWorkSchema = z.record(
  weekDaySchema,
  workScheduleSchema
);

export const barberSchema = z.object({
  _id: z.string().optional(),
  key: z.string(),
  name: z.string(),
  daysOfWork: daysOfWorkSchema,
});