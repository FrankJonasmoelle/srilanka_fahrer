import QuoteJonas from "./components/QuoteJonas";
import QuoteAnfas from "./components/QuoteAnfas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import GalleryAnfas from "./components/GalleryAnfas";
import './App.css';

function App() {
  return (
    <div className="page-container">
      <Header />
      <QuoteAnfas />
      <GalleryAnfas />
      <ContactForm />
      <QuoteJonas />
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
