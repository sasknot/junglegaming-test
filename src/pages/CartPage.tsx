export function CartPage() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Carrinho de NFTs</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
              <div className="h-20 w-20 rounded-2xl border border-slate-600 bg-slate-900" />
              <div className="flex-1">
                <p className="text-lg font-semibold text-white">NFT {item}</p>
                <p className="text-sm text-slate-400">Quantidade e remoção</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-cyan-300">1.25 ETH</p>
                <p className="text-xs text-slate-400">Disponível</p>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-white">Resumo</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex justify-between"><span>Subtotal</span><span>2.80 ETH</span></div>
            <div className="flex justify-between"><span>Desconto</span><span>-0.20 ETH</span></div>
            <div className="flex justify-between"><span>Taxa de rede</span><span>0.12 ETH</span></div>
            <div className="mt-4 flex justify-between border-t border-slate-700 pt-4 text-base font-semibold text-white">
              <span>Total</span>
              <span>2.72 ETH</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
            Ir para pagamento
          </button>
        </aside>
      </div>
    </section>
  );
}
