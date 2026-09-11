export default function CardAtividade({ atividade, aoSelecionar }) {
  const { numero, titulo, descricao, tecnologia } = atividade;

  return (
    <article className="card">
      <div className="card-top">
        <span className="card-num">#{numero}</span>
        <span className="badge-tech">{tecnologia}</span>
      </div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button className="btn-details" onClick={() => aoSelecionar(atividade)}>
        Ver Atividade
      </button>
    </article>
  );
}