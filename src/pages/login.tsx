import { Link } from '@tanstack/react-router';

export function Login() {
  return (
    <div className="auth-page">
      <div className="auth-art auth-art--login"><img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=90" alt="Arte digital abstrata em tons de verde" /><div className="auth-art__copy"><span>GREENMINT COLLECTIVE</span><p>Arte que atravessa fronteiras.</p><small>Uma nova perspectiva, a cada coleção.</small></div></div>
      <section className="auth-panel">
        <p className="eyebrow">Bem-vindo de volta</p><h1>Entre na sua conta</h1><p className="auth-subtitle">Continue sua jornada pelo universo da arte digital.</p>
        <form className="auth-form">
          <label className="form-field" htmlFor="email">E-mail<input id="email" type="email" autoComplete="email" placeholder="colecionador@email.com" required /></label>
          <label className="form-field" htmlFor="password">Senha<input id="password" type="password" autoComplete="current-password" placeholder="Sua senha" required /></label>
          <div className="auth-form__meta"><label className="terms-check"><input type="checkbox" /><span>Manter conectado</span></label><a href="#reset">Esqueceu a senha?</a></div>
          <button type="submit" className="button button--dark button--full">Entrar na GreenMint</button>
        </form>
        <div className="auth-divider"><span>ou continue com</span></div>
        <button type="button" className="button button--outline button--full social-button"><span aria-hidden="true">G</span> Google</button>
        <p className="auth-switch">Ainda não tem uma conta? <Link to="/register">Criar conta</Link></p>
      </section>
    </div>
  );
}
