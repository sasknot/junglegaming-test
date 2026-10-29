export function HomePage() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Início</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-300">
        Página de descoberta do marketplace com destaques, catálogo, busca, filtros e navegação para NFTs.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {['Destaques', 'Catálogo', 'Buscas e filtros'].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Seção</p>
            <p className="mt-2 text-lg font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
