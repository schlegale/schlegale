import "../styles/globals.scss";
import Title from "./components/Title";
import About from "./components/About";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grid-container">
      <div className="grid-element">
        <Title />
      </div>
      <div className="grid-element grid-col-span-2">
        <About />
      </div>
      <div className="grid-element">
        <Languages />
      </div>
      <div className="grid-element grid-col-span-3">
        <Contact />
      </div>
      <div className="grid-element grid-col-span-3">
        <Footer />
      </div>
    </div>
  );
}
