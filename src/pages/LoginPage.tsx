export function LoginPage() {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white">Login</h1>
      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">E-mail</label>
          <input id="email" type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" placeholder="colecionador@email.com" />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">Senha</label>
          <input id="password" type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" placeholder="••••••••" />
        </div>
        <button type="button" className="w-full rounded-full bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
          Entrar
        </button>
      </form>
    </section>
  );
}
