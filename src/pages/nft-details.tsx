import { useParams } from '@tanstack/react-router';

export function NftDetails() {
  const params = useParams({ strict: false });

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8">
      <span className="mb-3 inline-flex rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
        Placeholder
      </span>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Detalhes do NFT</h1>
      <p className="mt-4 text-slate-300">NFT selecionado: {params.nftId ?? 'sem-id'}</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 p-8">
          <div className="aspect-[4/5] rounded-2xl border border-dashed border-slate-600 bg-slate-900/70" />
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/60 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Coleção</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Metal Ape #001</h2>
          </div>
          <p className="text-slate-300">Descrição, galeria, preço, estoque, favoritos e ação de compra.</p>
          <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-4">
            <span className="text-slate-400">Preço</span>
            <span className="text-2xl font-bold text-cyan-300">2.35 ETH</span>
          </div>
          <button className="w-full rounded-full bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
            Comprar agora
          </button>
        </div>
      </div>
    </section>
  );
}
