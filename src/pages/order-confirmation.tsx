export function OrderConfirmation() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Confirmação de Pedido</h1>
      <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6">
        <p className="text-lg font-semibold text-emerald-300">Pedido confirmado com sucesso</p>
        <p className="mt-2 text-slate-200">Transação: 0x3f2a…d9b1</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ['Itens', '2'],
          ['Taxas', '0.12 ETH'],
          ['Total', '2.72 ETH'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
