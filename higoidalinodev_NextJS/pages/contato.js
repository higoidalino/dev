import Header from '../components/Header';
import Footer from '../components/Footer';

function Contato() {
  return (
    <div>
      <Header />

      <section id="contato">
        <h2>Contato</h2>
        <form>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required /><br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea><br /><br />

          <button type="submit">Enviar</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Contato;
