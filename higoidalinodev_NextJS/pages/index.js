import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />

      <section id="home">
        <h1>higoidalinodev</h1>
        <p>Desenvolvedor Front-End</p>
        <button>Veja meu Portfólio</button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;