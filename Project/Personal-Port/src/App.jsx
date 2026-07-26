import About from "./components/about/About";
import Exp from "./components/experience/Experience";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Exp />
      <Footer />
    </>
  );
}

export default App;