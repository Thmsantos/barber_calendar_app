import type { Client } from "../../barber/types/BarberData";

export type Appointment = {
  _id?: string;
  barberId: string;
  description: string;
  day: string;
  hour: string;
  client: Client;
};
