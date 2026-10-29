export function RegisterPage() {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white">Cadastro</h1>
      <form className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-200">Nome</label>
            <input id="firstName" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-200">Sobrenome</label>
            <input id="lastName" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" placeholder="Seu sobrenome" />
          </div>
        </div>
        <div>
          <label htmlFor="registerEmail" className="mb-2 block text-sm font-medium text-slate-200">E-mail</label>
          <input id="registerEmail" type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" placeholder="colecionador@email.com" />
        </div>
        <div>
          <label htmlFor="registerPassword" className="mb-2 block text-sm font-medium text-slate-200">Senha</label>
          <input id="registerPassword" type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" placeholder="Crie uma senha" />
        </div>
        <button type="button" className="w-full rounded-full bg-violet-500 px-4 py-3 font-medium text-white transition hover:bg-violet-400">
          Criar conta
        </button>
      </form>
    </section>
  );
}
