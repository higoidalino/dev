import Header from '../components/Header';
import Footer from '../components/Footer';

function Portfolio() {
  return (
    <div>
      <Header />

      <section id="portfolio">
        <h2>Portfólio</h2>
        <div className="projeto">
          <img src="/imagem-projeto1.jpg" alt="Projeto 1" />
          <h3>Nome do Projeto 1</h3>
          <p>Descrição do projeto e tecnologias utilizadas.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;