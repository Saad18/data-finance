import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
