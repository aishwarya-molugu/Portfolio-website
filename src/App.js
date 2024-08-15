import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
