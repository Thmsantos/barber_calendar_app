export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type WorkSchedule = {
  itWorks: boolean;
  startTime: string;
  endTime: string;
};

export type Client = {
  clientName: string;
  procces: string;
};

export type Marked = {
  day: string;
  hour: string;
  client: Client;
};

export type DaysOfWork = Record<WeekDay, WorkSchedule>;

export type Barber = {
  _id?: string;
  key: string;
  name: string
  daysOfWork: DaysOfWork;
};
