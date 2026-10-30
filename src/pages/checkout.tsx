import { Link } from '@tanstack/react-router';
import { Breadcrumbs, PriceRow } from '../components/marketplace-ui';

export function Checkout() {
  return (
    <div className="content-page checkout-page">
      <Breadcrumbs items={['Início', 'Mercado', 'Carrinho', 'Pagamento']} />
      <div className="checkout-title"><div><p className="eyebrow">Quase seu</p><h1>Finalizar compra</h1></div><div className="checkout-steps"><span className="checkout-step checkout-step--done">01 <b>Carrinho</b></span><i /><span className="checkout-step checkout-step--active">02 <b>Pagamento</b></span><i /><span className="checkout-step">03 <b>Confirmação</b></span></div></div>
      <div className="checkout-layout">
        <div className="checkout-fields">
          <section className="form-section"><div className="form-section__heading"><span className="step-number">01</span><div><h2>Dados do colecionador</h2><p>As informações para o recibo da sua compra.</p></div></div><div className="form-grid"><label className="form-field">Nome completo<input required defaultValue="Alex Colecionador" autoComplete="name" /></label><label className="form-field">E-mail<input required type="email" defaultValue="alex@email.com" autoComplete="email" /></label><label className="form-field form-field--wide">Endereço da carteira<input required placeholder="0x..." /></label></div></section>
          <section className="form-section"><div className="form-section__heading"><span className="step-number">02</span><div><h2>Carteira e rede</h2><p>Escolha como deseja receber seus NFTs.</p></div></div><div className="wallet-options">{[['MetaMask', '0x71C...9A32', 'MM'], ['WalletConnect', 'Conectar carteira', 'W'], ['Coinbase Wallet', 'Conectar carteira', 'C']].map(([name, address, icon], index) => <label className="wallet-option" key={name}><input type="radio" name="wallet" defaultChecked={index === 0} /><span className="wallet-option__icon">{icon}</span><span className="wallet-option__copy"><strong>{name}</strong><small>{address}</small></span><span className="radio-indicator" /></label>)}</div><label className="form-field network-select">Rede de pagamento<select defaultValue="ethereum"><option value="ethereum">Ethereum Mainnet</option><option value="polygon">Polygon</option></select></label></section>
          <label className="terms-check"><input type="checkbox" defaultChecked /><span>Concordo com os <a href="#terms">termos de compra</a> e confirmo que revisei os detalhes da transação.</span></label>
        </div>
        <aside className="summary-panel checkout-summary"><div className="summary-heading"><h2>Revisão do pedido</h2><Link to="/cart">Editar</Link></div><div className="checkout-item"><img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=180&q=80" alt="Emerald Ape #042" /><div><strong>Emerald Ape #042</strong><span>2 edições · Kurio Apes</span></div><b>2.38 ETH</b></div><div className="checkout-item"><img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=180&q=80" alt="Sage Nomad #009" /><div><strong>Sage Nomad #009</strong><span>1 edição · Kurio Editions</span></div><b>1.69 ETH</b></div><div className="summary-lines"><PriceRow label="Subtotal" value="4.07 ETH" /><PriceRow label="Desconto" value="− 0.00 ETH" /><PriceRow label="Taxas de rede" value="0.016 ETH" /></div><div className="summary-total"><PriceRow label="Total" value="4.086 ETH" total /><span>≈ $13,239 USD</span></div><Link to="/order-confirmation" className="button button--dark button--full">Confirmar compra <span aria-hidden="true">→</span></Link><p className="secure-note">⌑ Transação protegida e verificada</p></aside>
      </div>
    </div>
  );
}
