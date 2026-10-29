export function Checkout() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Pagamento</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Dados do colecionador</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input aria-label="Nome" placeholder="Nome" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
              <input aria-label="Sobrenome" placeholder="Sobrenome" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Carteira e rede</h2>
            <div className="mt-4 space-y-3">
              {['MetaMask', 'WalletConnect', 'Coinbase Wallet'].map((wallet) => (
                <label key={wallet} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-200">
                  <input type="radio" name="wallet" defaultChecked={wallet === 'MetaMask'} />
                  <span>{wallet}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
          <h2 className="text-xl font-semibold text-white">Revisão do pedido</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex justify-between"><span>Itens</span><span>2</span></div>
            <div className="flex justify-between"><span>Subtotal</span><span>2.80 ETH</span></div>
            <div className="flex justify-between"><span>Desconto</span><span>-0.20 ETH</span></div>
            <div className="flex justify-between"><span>Taxas</span><span>0.12 ETH</span></div>
            <div className="flex justify-between border-t border-slate-700 pt-4 text-base font-semibold text-white">
              <span>Total</span>
              <span>2.72 ETH</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full bg-emerald-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-emerald-400">
            Confirmar compra
          </button>
        </aside>
      </div>
    </section>
  );
}
