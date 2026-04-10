// import { useParams } from "react-router-dom";
import { useState } from "react";
import "../index.css";

const WEEK_DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

function generateTimeSlots(start: string, end: string): string[] {
    const times: string[] = [];

    let [hour, minute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    while (hour < endHour || (hour === endHour && minute < endMinute)) {
        const formatted = `${String(hour).padStart(2, "0")}:${String(
            minute
        ).padStart(2, "0")}`;
        times.push(formatted);

        minute += 60;

        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }

    return times;
}

const mockBarber = {
    id: "123",
    name: "Thiago Wayne",
    key: "waynebarber",
    workingDays: [0, 1, 2, 3, 4],
    start: "09:00",
    end: "18:00",
};

function BarberPage() {
    // const { id } = useParams();
    const barber = mockBarber;
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        clientName: "",
        procces: "",
        description: "",
    });

    const handleSubmit = () => {
        if (!selectedTime) return;

        // const newAppointment = {
        //     barberId: barber.id,
        //     description: form.description,
        //     day: "Monday",
        //     hour: selectedTime,
        //     client: {
        //         clientName: form.clientName,
        //         procces: form.procces,
        //     },
        // };

        setShowModal(false);
        setForm({
            clientName: "",
            procces: "",
            description: "",
        });
    };

    return (
        <main className="min-h-screen bg-neutral-50">
            <header className="bg-neutral-900 text-white px-4 py-6 md:px-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-semibold">
                        {barber.name}
                    </h1>
                    <p className="text-sm md:text-base mt-2 text-neutral-300">
                        Chave: {barber.key}
                    </p>
                </div>
            </header>

            <section className="px-4 py-6 md:px-10">
                <div className="max-w-5xl mx-auto flex flex-col gap-6">
                    <div className="bg-white rounded-2xl shadow-sm border p-4 md:p-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-4">
                            Informações de trabalho
                        </h2>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-sm font-medium mb-2">
                                    Dias de atendimento
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {WEEK_DAYS.map((day, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-2 text-sm rounded-lg border ${barber.workingDays.includes(index)
                                                ? "bg-neutral-900 text-white"
                                                : "bg-white text-neutral-400"
                                                }`}
                                        >
                                            {day}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium mb-2">
                                    Horário
                                </h3>

                                <p className="text-sm text-neutral-700">
                                    {barber.start} - {barber.end}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border p-4 md:p-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-4">
                            Agenda do dia
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {generateTimeSlots(barber.start, barber.end).map((time: string) => (
                                <button
                                    key={time}
                                    onClick={() => {
                                        setSelectedTime(time);
                                        setShowModal(true);
                                    }}
                                    className="border rounded-lg py-2 text-sm hover:bg-neutral-100 transition"
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">

                        <h2 className="text-lg font-semibold mb-4">
                            Agendar horário - {selectedTime}
                        </h2>

                        <div className="flex flex-col gap-4">

                            <input
                                type="text"
                                placeholder="Seu nome"
                                className="border rounded-lg px-3 py-2 text-sm"
                                value={form.clientName}
                                onChange={(e) =>
                                    setForm({ ...form, clientName: e.target.value })
                                }
                            />

                            <input
                                type="text"
                                placeholder="Processo (ex: Corte degradê)"
                                className="border rounded-lg px-3 py-2 text-sm"
                                value={form.procces}
                                onChange={(e) =>
                                    setForm({ ...form, procces: e.target.value })
                                }
                            />

                            <textarea
                                placeholder="Descrição (ex: Corte + barba)"
                                className="border rounded-lg px-3 py-2 text-sm"
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-6">

                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-sm"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={handleSubmit}
                                className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm"
                            >
                                Confirmar
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default BarberPage;