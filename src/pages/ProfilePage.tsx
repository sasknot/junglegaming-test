export function ProfilePage() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Perfil</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/60 p-6 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-slate-600 bg-slate-900 text-2xl font-semibold text-slate-200">
            AC
          </div>
          <p className="mt-4 text-xl font-semibold text-white">Alex Colecionador</p>
        </div>
        <form className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
          <div>
            <label htmlFor="profileName" className="mb-2 block text-sm font-medium text-slate-200">Nome</label>
            <input id="profileName" defaultValue="Alex Colecionador" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100" />
          </div>
          <div>
            <label htmlFor="profileEmail" className="mb-2 block text-sm font-medium text-slate-200">E-mail</label>
            <input id="profileEmail" type="email" defaultValue="alex@email.com" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100" />
          </div>
          <div>
            <label htmlFor="profilePassword" className="mb-2 block text-sm font-medium text-slate-200">Nova senha</label>
            <input id="profilePassword" type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
          </div>
          <button type="button" className="rounded-full bg-fuchsia-500 px-5 py-3 font-medium text-white transition hover:bg-fuchsia-400">
            Salvar alterações
          </button>
        </form>
      </div>
    </section>
  );
}
