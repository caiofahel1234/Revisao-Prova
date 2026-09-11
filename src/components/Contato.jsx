export default function Contato() {
  return (
    <section id="contato" className="section-block">
      <h2>Contato</h2>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }}>
        <input type="text" placeholder="Seu Nome" required />
        <input type="email" placeholder="Seu E-mail" required />
        <textarea placeholder="Sua Mensagem" rows="4" required></textarea>
        <button type="submit" className="btn-primary">Enviar Mensagem</button>
      </form>
    </section>
  );
}