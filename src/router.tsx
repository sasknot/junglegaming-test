import { Link, Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { Home } from './pages/home';
import { NftDetails } from './pages/nft-details';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';
import { OrderConfirmation } from './pages/order-confirmation';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Profile } from './pages/profile';
import { Wallets } from './pages/wallets';

function RootLayout() {
  return (
    <div className="app-frame">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="GreenMint, início">
            <span className="brand__mark" aria-hidden="true">G</span>
            <span>green<span className="brand__accent">mint</span></span>
          </Link>
          <nav aria-label="Navegação principal" className="main-nav">
            <Link to="/" className="main-nav__link">Início</Link>
            <a href="/#market" className="main-nav__link">Coleções</a>
            <a href="/#journal" className="main-nav__link">Diário</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu de navegação">☰</summary>
            <nav aria-label="Navegação mobile">
              <Link to="/">Início</Link><Link to="/nfts/emerald-ape-042">Detalhes do NFT</Link><Link to="/cart">Carrinho</Link><Link to="/checkout">Pagamento</Link><Link to="/order-confirmation">Pedidos</Link><Link to="/profile">Perfil</Link><Link to="/wallets">Carteiras</Link><Link to="/login">Entrar</Link><Link to="/register">Criar conta</Link>
            </nav>
          </details>
          <div className="header-actions">
            <Link to="/cart" className="icon-link" aria-label="Abrir carrinho"><span aria-hidden="true">▱</span><span className="header-cart-count">3</span></Link>
            <Link to="/profile" className="avatar-link" aria-label="Abrir perfil">AC</Link>
            <Link to="/wallets" className="button button--dark header-wallet">Conectar carteira</Link>
          </div>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <Link to="/" className="brand brand--footer"><span className="brand__mark" aria-hidden="true">G</span><span>green<span className="brand__accent">mint</span></span></Link>
            <p className="footer-note">Arte digital para um mundo sem fronteiras.</p>
          </div>
          <nav aria-label="Links da conta" className="footer-links">
            <Link to="/login">Entrar</Link><Link to="/register">Criar conta</Link><Link to="/profile">Meu perfil</Link><Link to="/wallets">Carteiras</Link>
          </nav>
          <span className="footer-copy">© 2025 GreenMint</span>
        </div>
      </footer>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const nftDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/nfts/$nftId',
  component: NftDetails,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cart',
  component: Cart,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: Checkout,
});

const confirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/order-confirmation',
  component: OrderConfirmation,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Profile,
});

const walletsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wallets',
  component: Wallets,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => (
    <section className="empty-state">
      <p className="eyebrow">404 · fora de rota</p>
      <h1>Página não encontrada</h1>
      <p>Este endereço não existe no marketplace.</p>
      <Link to="/" className="button button--dark">Voltar para o início</Link>
    </section>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  nftDetailRoute,
  cartRoute,
  checkoutRoute,
  confirmationRoute,
  loginRoute,
  registerRoute,
  profileRoute,
  walletsRoute,
  notFoundRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});
