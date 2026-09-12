import { useState, useEffect } from 'react';
import { atividades } from './data/atividades';
import Navegacao from './components/Navegacao';
import Cabecalho from './components/Cabecalho';
import BarraProgresso from './components/BarraProgresso';
import CardAtividade from './components/CardAtividade';
import ModalDetalhes from './components/ModalDetalhes';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Rodape from './components/Rodape';
import './styles/Global.css';

export default function App() {
  const [busca, setBusca] = useState('');
  const [filtroTech, setFiltroTech] = useState('Todos');
  const [tema, setTema] = useState(localStorage.getItem('portfolio-tema') || 'claro');
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    document.body.className = tema;
    localStorage.setItem('portfolio-tema', tema);
  }, [tema]);

  const itensFiltrados = atividades.filter(item => {
    const matchTech = filtroTech === 'Todos' || item.tecnologia === filtroTech;
    const matchTexto = item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       item.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchTech && matchTexto;
  });

  const concluidas = atividades.filter(i => i.status === 'Concluída').length;

  return (
    <div className="app-wrapper">
      <Navegacao tema={tema} setTema={setTema} />
      <Cabecalho />

      <main className="container">
        <Sobre />
        <BarraProgresso total={atividades.length} concluidas={concluidas} />

        <section id="atividades" className="section-block">
          <h2>Entregas das Atividades</h2>
          
          <div className="toolbar">
            <input 
              type="text" 
              className="search-input"
              placeholder="🔍 Buscar por título ou descrição..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)} 
            />
            <div className="filter-chips">
              {['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel'].map(tech => (
                <button 
                  key={tech} 
                  className={`chip ${filtroTech === tech ? 'active' : ''}`}
                  onClick={() => setFiltroTech(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {itensFiltrados.length === 0 ? (
            <p className="no-results">Nenhuma atividade encontrada com os filtros atuais.</p>
          ) : (
            <div className="card-grid">
              {itensFiltrados.map(item => (
                <CardAtividade 
                  key={item.id} 
                  atividade={item} 
                  aoSelecionar={setModalItem} 
                />
              ))}
            </div>
          )}
        </section>

        <Contato />
      </main>

      <Rodape />
      <ModalDetalhes atividade={modalItem} aoFechar={() => setModalItem(null)} />
    </div>
  );
}