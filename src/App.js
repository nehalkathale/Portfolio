import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
// import Certificates from "./components/certificates/Certificate";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Technologies />
      <Projects />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
