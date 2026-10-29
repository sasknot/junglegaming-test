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
  const links = [
    { label: 'Início', to: '/' },
    { label: 'Detalhes', to: '/nfts/metal-ape-001' },
    { label: 'Carrinho', to: '/cart' },
    { label: 'Pagamento', to: '/checkout' },
    { label: 'Confirmação', to: '/order-confirmation' },
    { label: 'Login', to: '/login' },
    { label: 'Cadastro', to: '/register' },
    { label: 'Perfil', to: '/profile' },
    { label: 'Carteiras', to: '/wallets' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-xl font-bold text-white">
            Jungle Gaming
          </Link>
          <nav aria-label="Navegação principal" className="hidden flex-wrap items-center gap-3 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
            Conectar carteira
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
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
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-glow">
      <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-400">404</p>
      <h1 className="text-3xl font-semibold text-white">Página não encontrada</h1>
      <p className="mt-4 text-slate-300">A rota solicitada ainda não foi implementada no bootstrap.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-400"
      >
        Voltar para o início
      </Link>
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
