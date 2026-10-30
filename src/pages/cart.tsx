import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Breadcrumbs, PageHeading, PriceRow, products } from '../components/marketplace-ui';

export function Cart() {
  const [items, setItems] = useState(products.slice(0, 3).map((product, index) => ({ ...product, quantity: [2, 6, 9][index] })));
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const subtotal = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const total = subtotal - discount + 0.016;

  function changeQuantity(id: string, change: number) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item));
  }

  return (
    <div className="content-page cart-page">
      <Breadcrumbs items={['Início', 'Mercado', 'Carrinho']} />
      <div className="page-heading cart-heading"><p className="eyebrow">Sua próxima peça favorita</p><PageHeading title="Carrinho" /><span className="cart-heading__count">{items.length} obras</span></div>
      <div className="cart-layout">
        <section className="cart-table" aria-label="Itens do carrinho">
          <div className="cart-table__head"><span>NFTs</span><span>Preço</span><span>Edições</span><span>Total</span><span /></div>
          {items.map((item) => <article className="cart-item" key={item.id}>
            <div className="cart-item__product"><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=180&q=80`} alt={`Obra ${item.name}`} /><div><strong>{item.name}</strong><span>ID do token: #{item.id.slice(-3)}</span></div></div>
            <strong className="cart-item__price">{item.price} ETH</strong>
            <div className="quantity-control quantity-control--small"><button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label={`Diminuir ${item.name}`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label={`Aumentar ${item.name}`}>+</button></div>
            <strong className="cart-item__total">{(Number(item.price) * item.quantity).toFixed(2)} ETH</strong>
            <button type="button" className="remove-item" onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))} aria-label={`Remover ${item.name}`}>×</button>
          </article>)}
          {items.length === 0 && <div className="cart-empty"><p>Seu carrinho está esperando por uma obra especial.</p><Link to="/" className="button button--dark">Explorar coleção</Link></div>}
          <div className="cart-continue"><Link to="/">← Continuar explorando</Link><span>Pagamento seguro · Taxas transparentes</span></div>
        </section>
        <aside className="summary-panel">
          <div className="summary-heading"><h2>Resumo da carteira</h2><span className="secure-mark" aria-label="Pagamento protegido">✓</span></div>
          <label className="field-label" htmlFor="coupon">Código promocional</label>
          <div className="coupon-row"><input id="coupon" value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Digite seu código" /><button type="button" onClick={() => setDiscount(coupon.trim() ? subtotal * 0.05 : 0)}>Aplicar</button></div>
          {discount > 0 && <p className="coupon-success" role="status">Código aplicado: 5% de desconto</p>}
          <div className="summary-lines"><PriceRow label="Subtotal" value={`${subtotal.toFixed(2)} ETH`} /><PriceRow label="Desconto" value={`− ${discount.toFixed(2)} ETH`} /><PriceRow label="Taxa de rede" value="0.016 ETH" /></div>
          <div className="summary-total"><PriceRow label="Total estimado" value={`${total.toFixed(3)} ETH`} total /><span>O valor final é confirmado na etapa seguinte.</span></div>
          <Link to="/checkout" className="button button--dark button--full">Conectar e finalizar <span aria-hidden="true">→</span></Link>
          <div className="payment-methods"><span>ACEITAMOS</span><b>ETH</b><b>◈</b><b>◎</b></div>
        </aside>
      </div>
    </div>
  );
}
