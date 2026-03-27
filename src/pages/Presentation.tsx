import "../index.css";

const WEEK_DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

function Presentation() {
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
          <form className="flex flex-col gap-10">
            <fieldset className="space-y-6">
              <legend className="text-lg md:text-xl font-semibold">
                Informações do barbeiro
              </legend>

              <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Chave da barbearia
                  </label>
                  <input
                    type="text"
                    placeholder="Identificador único"
                    className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-8">
              <legend className="text-lg md:text-xl font-semibold">
                Detalhes de trabalho
              </legend>

              <div>
                <h3 className="text-sm font-medium mb-3">
                  Dias de trabalho
                </h3>

                <div className="flex flex-wrap gap-2">
                  {WEEK_DAYS.map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      className="px-3 py-2 text-sm rounded-lg border bg-white hover:bg-neutral-100 transition"
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">
                  Horário de trabalho
                </h3>

                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex flex-col gap-1 flex-1">
                    <label className="text-sm">
                      Início
                    </label>
                    <input
                      type="time"
                      className="border rounded-lg px-3 py-2 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1 flex-1">
                    <label className="text-sm">
                      Final
                    </label>
                    <input
                      type="time"
                      className="border rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="flex flex-col gap-3 md:flex-row md:justify-end">
              <button
                type="submit"
                className="w-full md:w-auto bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition"
              >
                Salvar informações
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Presentation;