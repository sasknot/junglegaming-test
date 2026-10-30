export type Nft = {
  id: string;
  name: string;
  price: string;
  creator: string;
  image: string;
  edition: string;
};

export const products: Nft[] = [
  { id: 'emerald-ape-042', name: 'Emerald Ape #042', price: '1.19', creator: 'Nova Sato', image: 'photo-1634017839464-5c339ebe3cb4', edition: '1 de 50' },
  { id: 'sage-nomad-009', name: 'Sage Nomad #009', price: '1.69', creator: 'Mika Ito', image: 'photo-1618005198919-d3d4b5a92ead', edition: '1 de 10' },
  { id: 'neon-vessel-552', name: 'Neon Vessel #552', price: '1.99', creator: 'Studio Forma', image: 'photo-1634986666676-ec8fd927c23d', edition: 'Edição aberta' },
  { id: 'cosmic-bloom-118', name: 'Cosmic Bloom #118', price: '1.29', creator: 'Ari Kato', image: 'photo-1634986666676-ec8fd927c23d', edition: '1 de 25' },
  { id: 'violet-nomad-314', name: 'Violet Nomad #314', price: '1.39', creator: 'Mika Ito', image: 'photo-1634017839464-5c339ebe3cb4', edition: '1 de 15' },
  { id: 'ivory-baron-088', name: 'Ivory Baron #088', price: '1.79', creator: 'Nova Sato', image: 'photo-1634986666676-ec8fd927c23d', edition: '1 de 50' },
  { id: 'golden-beat-207', name: 'Golden Beat #207', price: '0.99', creator: 'Kiyo Works', image: 'photo-1618005198919-d3d4b5a92ead', edition: '1 de 20' },
  { id: 'golden-signal-160', name: 'Golden Signal #160', price: '0.39', creator: 'Studio Forma', image: 'photo-1634986666676-ec8fd927c23d', edition: '1 de 100' },
  { id: 'forest-memory-021', name: 'Forest Memory #021', price: '2.09', creator: 'Ari Kato', image: 'photo-1634017839464-5c339ebe3cb4', edition: '1 de 5' },
];

export function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="breadcrumbs">
      {items.map((item, index) => (
        <span key={item} aria-current={index === items.length - 1 ? 'page' : undefined}>
          {index > 0 && <span className="breadcrumbs__divider" aria-hidden="true">/</span>}
          {item}
        </span>
      ))}
    </nav>
  );
}

export function PageHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="page-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="page-heading__description">{description}</p>}
    </div>
  );
}

export function ProductCard({ product, compact = false }: { product: Nft; compact?: boolean }) {
  return (
    <article className={`product-card${compact ? ' product-card--compact' : ''}`}>
      <a className="product-card__art" href={`/nfts/${product.id}`} aria-label={`Ver ${product.name}`}>
        <img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=720&q=85`} alt={`Obra digital ${product.name}`} loading="lazy" />
        <span className="art-edition">{product.edition}</span>
      </a>
      <div className="product-card__meta">
        <div className="product-card__heading">
          <div>
            <a href={`/nfts/${product.id}`} className="product-card__name">{product.name}</a>
            <p className="product-card__creator">por {product.creator}</p>
          </div>
          <button type="button" className="icon-button favorite-button" aria-label={`Favoritar ${product.name}`}>
            <span aria-hidden="true">♡</span>
          </button>
        </div>
        <div className="product-card__price"><span>Preço atual</span><strong>{product.price} ETH</strong></div>
      </div>
    </article>
  );
}

export function PriceRow({ label, value, total = false }: { label: string; value: string; total?: boolean }) {
  return <div className={`price-row${total ? ' price-row--total' : ''}`}><span>{label}</span><strong>{value}</strong></div>;
}

export function Artwork({ image, alt, className = '' }: { image: string; alt: string; className?: string }) {
  return <img className={`artwork ${className}`} src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1100&q=90`} alt={alt} />;
}