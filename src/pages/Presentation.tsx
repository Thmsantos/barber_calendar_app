import { useState } from "react";
import "../index.css";

type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type WorkSchedule = {
  itWorks: boolean;
  startTime: string;
  endTime: string;
};

const WEEK_DAYS: { label: string; value: WeekDay }[] = [
  { label: "Seg", value: "Monday" },
  { label: "Ter", value: "Tuesday" },
  { label: "Qua", value: "Wednesday" },
  { label: "Qui", value: "Thursday" },
  { label: "Sex", value: "Friday" },
  { label: "Sáb", value: "Saturday" },
  { label: "Dom", value: "Sunday" },
];

function Presentation() {
  const [tab, setTab] = useState<"login" | "register">("login");

  const [daysOfWork, setDaysOfWork] = useState<Record<WeekDay, WorkSchedule>>({
    Monday: { itWorks: false, startTime: "", endTime: "" },
    Tuesday: { itWorks: false, startTime: "", endTime: "" },
    Wednesday: { itWorks: false, startTime: "", endTime: "" },
    Thursday: { itWorks: false, startTime: "", endTime: "" },
    Friday: { itWorks: false, startTime: "", endTime: "" },
    Saturday: { itWorks: false, startTime: "", endTime: "" },
    Sunday: { itWorks: false, startTime: "", endTime: "" },
  });

  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="bg-neutral-900 text-white px-4 py-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Agenda de Barbeiro
          </h1>
          <p className="text-sm md:text-base mt-2 text-neutral-300 max-w-xl">
            Organize seus horários e atendimentos de forma simples.
          </p>
        </div>
      </header>

      <section className="px-4 py-6 md:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border p-4 md:p-8">
          
          <div className="flex mb-8 border-b">
            <button
              onClick={() => setTab("login")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "login"
                  ? "border-b-2 border-neutral-900 text-neutral-900"
                  : "text-neutral-400"
              }`}
            >
              Já tenho conta
            </button>

            <button
              onClick={() => setTab("register")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "register"
                  ? "border-b-2 border-neutral-900 text-neutral-900"
                  : "text-neutral-400"
              }`}
            >
              Criar conta
            </button>
          </div>

          {tab === "login" ? (
            <form className="flex flex-col gap-6">
              <fieldset className="space-y-6">
                <legend className="text-lg font-semibold">
                  Acessar barbearia
                </legend>

                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="border rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Sua chave"
                    className="border rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </fieldset>

              <button className="bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm">
                Acessar
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-10">
              <fieldset className="space-y-6">
                <legend className="text-lg md:text-xl font-semibold">
                  Informações do barbeiro
                </legend>

                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="border rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Identificador único"
                    className="border rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="text-lg md:text-xl font-semibold">
                  Dias e horários de trabalho
                </legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
                  {WEEK_DAYS.map((day) => {
                    const schedule = daysOfWork[day.value];

                    return (
                      <div
                        key={day.value}
                        className="border rounded-lg p-2 flex flex-col gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={schedule.itWorks}
                            onChange={(e) =>
                              setDaysOfWork((prev) => ({
                                ...prev,
                                [day.value]: {
                                  ...prev[day.value],
                                  itWorks: e.target.checked,
                                },
                              }))
                            }
                          />
                          <span className="text-sm font-medium">
                            {day.label}
                          </span>
                        </div>

                        {schedule.itWorks && (
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <label className="text-[10px] text-neutral-500">
                                Início
                              </label>
                              <input
                                type="time"
                                value={schedule.startTime}
                                onChange={(e) =>
                                  setDaysOfWork((prev) => ({
                                    ...prev,
                                    [day.value]: {
                                      ...prev[day.value],
                                      startTime: e.target.value,
                                    },
                                  }))
                                }
                                className="border rounded px-1 py-[2px] text-xs"
                              />
                            </div>

                            <div className="flex flex-col">
                              <label className="text-[10px] text-neutral-500">
                                Fim
                              </label>
                              <input
                                type="time"
                                value={schedule.endTime}
                                onChange={(e) =>
                                  setDaysOfWork((prev) => ({
                                    ...prev,
                                    [day.value]: {
                                      ...prev[day.value],
                                      endTime: e.target.value,
                                    },
                                  }))
                                }
                                className="border rounded px-1 py-[2px] text-xs"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </fieldset>

              <button
                type="submit"
                className="bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm"
              >
                Criar conta
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Presentation;