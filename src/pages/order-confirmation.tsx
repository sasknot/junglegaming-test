import { Link } from '@tanstack/react-router';
import { Breadcrumbs, PriceRow } from '../components/marketplace-ui';

export function OrderConfirmation() {
  return (
    <div className="content-page confirmation-page">
      <Breadcrumbs items={['Início', 'Mercado', 'Pedido confirmado']} />
      <div className="confirmation-banner"><div className="confirmation-check" aria-hidden="true">✓</div><p className="eyebrow">Uma peça a menos no mundo, uma a mais na sua coleção</p><h1>Pedido confirmado</h1><p>Sua coleção acaba de ganhar novas histórias. Enviamos os detalhes para seu e-mail.</p><div className="transaction-id"><span>TRANSAÇÃO</span><strong>0x3f2a...d9b1</strong><button type="button" aria-label="Copiar identificador da transação">⧉</button></div></div>
      <div className="confirmation-layout"><section className="receipt-panel"><div className="panel-heading"><h2>Resumo do pedido</h2><span>GM-2025-0042</span></div><div className="receipt-items">{[{ name: 'Emerald Ape #042', image: 'photo-1634017839464-5c339ebe3cb4', price: '2.38 ETH' }, { name: 'Sage Nomad #009', image: 'photo-1618005198919-d3d4b5a92ead', price: '1.69 ETH' }].map((item) => <div className="receipt-item" key={item.name}><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=180&q=80`} alt={item.name} /><div><strong>{item.name}</strong><span>Kurio Editions · Edição limitada</span></div><b>{item.price}</b></div>)}</div><dl className="receipt-details"><div><dt>Data</dt><dd>30 out, 2025 · 14:32 UTC</dd></div><div><dt>Carteira</dt><dd>0x71C...9A32</dd></div><div><dt>Rede</dt><dd>Ethereum Mainnet</dd></div></dl></section><aside className="summary-panel receipt-summary"><h2>Totais</h2><div className="summary-lines"><PriceRow label="Subtotal" value="4.07 ETH" /><PriceRow label="Taxas de rede" value="0.016 ETH" /></div><div className="summary-total"><PriceRow label="Total pago" value="4.086 ETH" total /><span>≈ $13,239 USD</span></div><a className="button button--outline button--full" href="https://etherscan.io" target="_blank" rel="noreferrer">Ver na blockchain <span aria-hidden="true">↗</span></a></aside></div>
      <div className="confirmation-actions"><Link to="/" className="button button--dark">Continuar explorando</Link><Link to="/profile" className="button button--outline">Ver minha coleção</Link></div>
    </div>
  );
}
