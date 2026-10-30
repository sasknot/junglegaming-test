import { ProductCard, products } from '../components/marketplace-ui';

const journal = [
  { title: 'Como funciona a propriedade de NFTs', date: '12 de setembro · 6 min', image: 'photo-1634017839464-5c339ebe3cb4', description: 'Aprenda a colecionar, negociar e verificar ativos digitais.' },
  { title: '10 artistas digitais para acompanhar', date: '13 de setembro · 2 min', image: 'photo-1618005198919-d3d4b5a92ead', description: 'Criadores que estão moldando uma nova cultura visual.' },
  { title: 'Raridade, atributos e procedência', date: '15 de setembro · 3 min', image: 'photo-1634986666676-ec8fd927c23d', description: 'O que torna cada obra digital verdadeiramente única.' },
  { title: 'Como proteger sua carteira', date: '18 de setembro · 4 min', image: 'photo-1634986666676-ec8fd927c23d', description: 'Boas práticas para cuidar dos seus ativos e da sua identidade.' },
];

export function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Bem-vindo à GreenMint</p>
          <h1>Own the future of digital art.</h1>
          <p className="hero__description">Descubra NFTs selecionados de artistas emergentes e consagrados. Encontre obras raras e colecione o que vem a seguir.</p>
          <a className="button button--mint" href="#market">Explorar coleção <span aria-hidden="true">↗</span></a>
          <div className="hero__index" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div className="hero__visual">
          <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=90" alt="Arte digital abstrata da coleção em destaque" />
          <div className="hero__stamp">ARTE<br />SEM LIMITES</div>
        </div>
      </section>

      <section className="market-section" id="market" aria-label="Catálogo de NFTs">
        <aside className="filter-sidebar" aria-label="Filtros do catálogo">
          <div className="filter-block">
            <div className="filter-block__top"><h2>Filtros</h2><button className="filter-link" type="reset">Limpar tudo</button></div>
            <label className="filter-search"><span aria-hidden="true">⌕</span><input aria-label="Buscar coleção" placeholder="Buscar coleção" /></label>
          </div>
          <div className="filter-block filter-block--categories">
            <h3>Categorias</h3>
            <div className="filter-list">
              {['Arte digital', 'Colecionáveis', 'Fotografia', 'Música', 'Jogos'].map((category, index) => <label className="filter-check" key={category}><input type="checkbox" defaultChecked={index === 0} />{category}<span className="filter-count">{[42, 18, 12, 8, 24][index]}</span></label>)}
            </div>
          </div>
          <div className="filter-block">
            <h3>Faixa de preço (ETH)</h3>
            <div className="range-row"><input aria-label="Preço mínimo" inputMode="decimal" placeholder="Mínimo" /><span>—</span><input aria-label="Preço máximo" inputMode="decimal" placeholder="Máximo" /></div>
          </div>
          <div className="filter-block">
            <h3>Tipo de edição</h3>
            <div className="filter-list"><label className="filter-check"><input type="checkbox" />Edição única</label><label className="filter-check"><input type="checkbox" />Limitada</label><label className="filter-check"><input type="checkbox" />Edição aberta</label></div>
          </div>
          <article className="featured-nft">
            <img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=700&q=85" alt="Arte digital Cosmic Bloom" loading="lazy" />
            <div className="featured-nft__label"><span>EM DESTAQUE</span><span>OFERTA LIMITADA</span></div>
            <div className="featured-nft__copy"><p>Escolha do curador</p><strong>Cosmic Bloom #118</strong></div>
          </article>
        </aside>

        <div className="catalogue">
          <div className="catalogue-toolbar">
            <div className="catalogue-tabs" role="tablist" aria-label="Coleções">
              <button type="button" role="tab" aria-selected="true">Todos os NFTs</button><button type="button" role="tab" aria-selected="false">Novos lançamentos</button><button type="button" role="tab" aria-selected="false">Em alta</button>
            </div>
            <label className="catalogue-sort">Ordenar por:<select defaultValue="recent"><option value="recent">Listados recentemente</option><option value="low">Menor preço</option><option value="high">Maior preço</option></select></label>
          </div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <nav className="pagination" aria-label="Paginação"><button type="button" aria-current="page">1</button><button type="button">2</button><button type="button">3</button><button type="button">4</button><button type="button" aria-label="Próxima página">→</button></nav>
        </div>
      </section>

      <section className="promo-grid" aria-label="Coleções selecionadas">
        <article className="promo-card">
          <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=650&q=85" alt="Obra de uma coleção Genesis" loading="lazy" />
          <div className="promo-card__copy"><p className="eyebrow">Edições raras</p><h2>Genesis drops, para sempre.</h2><p>Peças limitadas, direto de quem cria. Antes de todo mundo.</p><a className="button button--dark" href="#market">Explorar <span aria-hidden="true">↗</span></a></div>
        </article>
        <article className="promo-card">
          <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=650&q=85" alt="Arte digital curada" loading="lazy" />
          <div className="promo-card__copy"><p className="eyebrow">Curadoria GreenMint</p><h2>Novos olhares, novas histórias.</h2><p>Artistas independentes e coleções que definem a cultura.</p><a className="button button--dark" href="#market">Descobrir <span aria-hidden="true">↗</span></a></div>
        </article>
      </section>

      <section className="journal" id="journal">
        <div className="section-title"><p className="eyebrow">Notas de quem coleciona</p><h2>Diário da Cunhagem</h2><p>Histórias, guias e insights sobre o universo da propriedade digital.</p></div>
        <div className="journal-grid">{journal.map((entry) => <article className="journal-card" key={entry.title}><img src={`https://images.unsplash.com/${entry.image}?auto=format&fit=crop&w=600&q=80`} alt="" loading="lazy" /><div className="journal-card__body"><time>{entry.date}</time><h3>{entry.title}</h3><p>{entry.description}</p><a href="#journal">Ler mais <span aria-hidden="true">→</span></a></div></article>)}</div>
      </section>
    </div>
  );
}