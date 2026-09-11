export default function Navegacao({ tema, setTema }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#atividades">Atividades</a>
          <a href="#contato">Contato</a>
          <button className="theme-toggle" onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
            {tema === 'claro' ? '🌙 Escuro' : '☀️ Claro'}
          </button>
        </div>
      </div>
    </nav>
  );
}