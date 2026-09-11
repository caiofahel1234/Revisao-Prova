export default function BarraProgresso({ total, concluidas }) {
  const percentual = Math.round((concluidas / total) * 100);

  return (
    <section className="section-block">
      <div className="progress-header">
        <span>Progresso Geral: <strong>{concluidas} de {total}</strong> ({percentual}%)</span>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={percentual} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-fill" style={{ width: `${percentual}%` }}></div>
      </div>
    </section>
  );
}