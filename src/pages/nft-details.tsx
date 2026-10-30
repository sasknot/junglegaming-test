import { useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { Artwork, Breadcrumbs, PageHeading, ProductCard, products } from '../components/marketplace-ui';

export function NftDetails() {
  const params = useParams({ strict: false });
  const product = products.find((item) => item.id === params.nftId) ?? products[0];
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');

  return (
    <div className="content-page detail-page">
      <Breadcrumbs items={['Início', 'Mercado', 'Detalhes do NFT']} />
      <section className="detail-layout">
        <div className="detail-gallery">
          <div className="detail-thumbnails" aria-label="Imagens da obra">
            {[product.image, 'photo-1618005198919-d3d4b5a92ead', 'photo-1634986666676-ec8fd927c23d', 'photo-1634017839464-5c339ebe3cb4'].map((image, index) => <button type="button" className={`thumbnail${index === 0 ? ' thumbnail--active' : ''}`} key={`${image}-${index}`} aria-label={`Ver imagem ${index + 1}`}><Artwork image={image} alt="" /></button>)}
          </div>
          <div className="detail-main-art"><Artwork image={product.image} alt={`Obra digital ${product.name}`} /><span className="art-edition">OBRA VERIFICADA · ETHEREUM</span><button type="button" className={`icon-button detail-favorite${favorite ? ' is-favorite' : ''}`} onClick={() => setFavorite((value) => !value)} aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}>{favorite ? '♥' : '♡'}</button></div>
        </div>
        <div className="detail-info">
          <p className="eyebrow">Kurio Apes · Coleção verificada</p>
          <PageHeading title={product.name} />
          <div className="detail-price-line"><strong>{product.price} ETH</strong><span>≈ ${(Number(product.price) * 3240).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD</span></div>
          <div className="rating-line"><span className="rating-stars" aria-label="5 de 5 estrelas">★★★★★</span><span>19 avaliações de colecionadores</span></div>
          <p className="detail-description">Uma obra digital finalizada à mão da coleção Kurio Editions, verificada na Ethereum, com arte desbloqueável e acesso para colecionadores.</p>
          <div className="detail-edition"><span className="field-label">Edição</span><div className="edition-options"><button type="button" className="edition-option">1/1</button><button type="button" className="edition-option edition-option--active">1/10</button><button type="button" className="edition-option">1/50</button><button type="button" className="edition-option">Aberta</button></div></div>
          <div className="detail-buy-row"><div className="quantity-control"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Diminuir quantidade">−</button><span>{quantity}</span><button type="button" onClick={() => setQuantity((value) => Math.min(10, value + 1))} aria-label="Aumentar quantidade">+</button></div><Link to="/cart" className="button button--dark">Comprar agora</Link><button type="button" onClick={() => setFavorite((value) => !value)} className="button button--outline">{favorite ? '♥ Salvo' : '♡ Favoritar'}</button></div>
          <div className="detail-facts"><p><span>ID do token</span><strong>#0042</strong></p><p><span>Coleção</span><strong>Kurio Apes</strong></p><p><span>Atributos</span><strong>Óculos, Esmeralda, Raro</strong></p><p><span>Criador</span><strong>{product.creator}</strong></p></div>
          <div className="share-row"><span>Compartilhar este NFT</span><button type="button" aria-label="Compartilhar no X">𝕏</button><button type="button" aria-label="Copiar link">↗</button></div>
        </div>
      </section>

      <section className="detail-extra">
        <div className="detail-tabs" role="tablist"><button type="button" role="tab" aria-selected={activeTab === 'details'} onClick={() => setActiveTab('details')}>Detalhes do NFT</button><button type="button" role="tab" aria-selected={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>Avaliações de colecionadores (19)</button></div>
        {activeTab === 'details' ? <div className="detail-tab-content"><p>{product.name} é uma obra digital 1/50 da coleção Kurio Editions. Cada atributo fica armazenado nos metadados do token e verificado na Ethereum. A propriedade inclui a arte em alta resolução, lançamentos exclusivos para colecionadores e um registro permanente de procedência na rede.</p><div className="detail-chain"><span>Rede</span><strong>Ethereum · ERC-721</strong><span>Contrato</span><strong>0x7A42...19E8 · Verificado</strong><span>Direitos autorais</span><strong>5% nas vendas secundárias</strong></div></div> : <div className="detail-tab-content review-content"><span className="rating-stars">★★★★★</span><strong>4,9 de 5</strong><span>Baseado em 19 avaliações verificadas</span></div>}
      </section>

      <section className="related-section"><div className="section-title"><p className="eyebrow">Descubra mais</p><h2>Mais desta coleção</h2></div><div className="related-grid">{products.slice(3, 7).map((item) => <ProductCard key={item.id} product={item} compact />)}</div></section>
    </div>
  );
}
