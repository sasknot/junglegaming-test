import { Link } from '@tanstack/react-router';

export function Register() {
  return (
    <div className="auth-page auth-page--register">
      <div className="auth-art auth-art--register"><img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=90" alt="Composição de arte digital colorida" /><div className="auth-art__copy"><span>UM LUGAR PARA O EXTRAORDINÁRIO</span><p>Seu próximo capítulo começa com uma escolha.</p><small>Crie sua coleção. Guarde o que importa.</small></div></div>
      <section className="auth-panel">
        <p className="eyebrow">Faça parte da comunidade</p><h1>Crie sua conta</h1><p className="auth-subtitle">Seu espaço para descobrir, colecionar e acompanhar novos artistas.</p>
        <form className="auth-form">
          <div className="form-grid"><label className="form-field">Nome<input autoComplete="given-name" placeholder="Seu nome" required /></label><label className="form-field">Sobrenome<input autoComplete="family-name" placeholder="Seu sobrenome" required /></label></div>
          <label className="form-field">E-mail<input type="email" autoComplete="email" placeholder="colecionador@email.com" required /></label>
          <label className="form-field">Senha<input type="password" autoComplete="new-password" placeholder="Mínimo de 8 caracteres" minLength={8} required /></label>
          <label className="terms-check"><input type="checkbox" required /><span>Li e aceito os <a href="#terms">termos de uso</a> e a política de privacidade.</span></label>
          <button type="submit" className="button button--dark button--full">Criar minha conta</button>
        </form>
        <p className="auth-switch">Já faz parte da GreenMint? <Link to="/login">Entrar</Link></p>
      </section>
    </div>
  );
}
