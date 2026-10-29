export function Wallets() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Carteiras</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          ['Principal', '0xAB12...9F2A', 'Ethereum'],
          ['Secundária', '0xD7E1...8B4C', 'Polygon'],
        ].map(([label, address, network]) => (
          <div key={label} className="rounded-3xl border border-slate-700 bg-slate-950/60 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
            <p className="mt-3 text-xl font-semibold text-white">{address}</p>
            <p className="mt-2 text-sm text-slate-300">Rede: {network}</p>
            <button className="mt-4 rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-pink-400 hover:text-pink-300">
              Editar carteira
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
