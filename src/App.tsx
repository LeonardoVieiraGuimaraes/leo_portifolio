import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsDeveloper from "./components/ProjectsDeveloper";
import ProjectsAcademics from "./components/ProjectsAcademics";
import ProjectsProfessor from "./components/ProjectsProfessor";
import Services from "./components/Services";
import Skills from "./components/Skills";
// import Textimonials from "./components/Textimonials";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <ProjectsDeveloper />
      <ProjectsAcademics />
      <ProjectsProfessor />

      <Skills />
      {/* <Textimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
