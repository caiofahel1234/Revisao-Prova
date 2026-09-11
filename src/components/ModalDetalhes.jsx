export default function ModalDetalhes({ atividade, aoFechar }) {
  if (!atividade) return null;

  return (
    <div className="modal-backdrop" onClick={aoFechar}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="modal-badge">{atividade.tecnologia}</span>
        <h3>Item #{atividade.numero} - {atividade.titulo}</h3>
        <p>{atividade.descricao}</p>
        <div className="modal-status">Status: <strong>{atividade.status}</strong></div>
        <button className="btn-primary" onClick={aoFechar}>Fechar</button>
      </div>
    </div>
  );
}